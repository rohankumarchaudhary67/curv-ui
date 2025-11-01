import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import { Command } from "commander";
import ora from "ora";

export const remove = new Command()
    .name("delete")
    .argument("<component>", "component name to delete")
    .description("Delete a UI component from your project")
    .action(async (componentName) => {
        const spinner = ora(`Deleting ${componentName}...`).start();

        try {
            // Detect whether 'src' folder exists
            const cwd = process.cwd();
            const srcPath = path.join(cwd, "src");
            const hasSrc = await fs.pathExists(srcPath);

            // Resolve component directory like `add` uses
            const targetDir = hasSrc
                ? path.join(srcPath, "components/ui")
                : path.join(cwd, "components/ui");

            const targetFile = path.join(targetDir, `${componentName}.tsx`);

            // Check if component exists
            const exists = await fs.pathExists(targetFile);
            if (!exists) {
                spinner.fail(
                    chalk.red(`Component '${componentName}' does not exist.`)
                );
                process.exit(1);
            }

            // Delete file
            await fs.remove(targetFile);

            spinner.succeed(
                chalk.green(
                    `✅ ${componentName} component deleted successfully!`
                )
            );
        } catch (error: any) {
            spinner.fail(
                chalk.red(`Failed to delete ${componentName}: ${error.message}`)
            );
            process.exit(1);
        }
    });
