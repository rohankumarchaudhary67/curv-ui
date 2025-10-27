// packages/cli/src/commands/add.ts
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { Command } from "commander";
import { execa } from "execa";
import ora from "ora";
import { getTemplate } from "../utils/templates.js";

export const add = new Command()
    .name("add")
    .argument("<component>", "component name to add")
    .description("Add a UI component to your project")
    .action(async (componentName) => {
        const spinner = ora(`Adding ${componentName}...`).start();

        try {
            const template = await getTemplate(componentName);
            if (!template) {
                spinner.fail(
                    chalk.red(
                        `No template found for component: ${componentName}`
                    )
                );
                process.exit(1);
            }

            // Detect whether 'src' folder exists
            const cwd = process.cwd();
            const srcPath = path.join(cwd, "src");
            const hasSrc = await fs.pathExists(srcPath);

            // Set output directory based on project structure
            const outDir = hasSrc
                ? path.join(srcPath, "components/ui")
                : path.join(cwd, "components/ui");

            await fs.ensureDir(outDir);
            const outFile = path.join(outDir, `${componentName}.tsx`);
            await fs.writeFile(outFile, template);

            // Define dependencies for each component
            const deps: Record<string, string[]> = {
                button: [
                    "@radix-ui/react-slot",
                    "class-variance-authority",
                    "clsx",
                    "tailwind-merge",
                ],
            };

            // Install dependencies if defined
            if (deps[componentName]) {
                spinner.text = "Installing dependencies...";
                await execa("npm", ["install", ...deps[componentName]], {
                    stdio: "inherit",
                });
            }

            spinner.succeed(
                chalk.green(`✅ ${componentName} component added successfully!`)
            );
        } catch (error: any) {
            spinner.fail(
                chalk.red(`Failed to add ${componentName}: ${error.message}`)
            );
            process.exit(1);
        }
    });
