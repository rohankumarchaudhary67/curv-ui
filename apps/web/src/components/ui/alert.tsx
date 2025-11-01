import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X, Info, AlertTriangle, CheckCircle, AlertCircle } from "lucide-react";

const icons = {
    default: Info,
    warning: AlertTriangle,
    error: AlertCircle,
    success: CheckCircle,
};

const alertVariants = cva(
    "relative w-full rounded-xl border px-4 py-3 text-sm flex items-start gap-3 transition-all duration-200",
    {
        variants: {
            variant: {
                default: `
          bg-blue-500/10 text-blue-500 border-blue-400/40
          dark:bg-blue-600/10 dark:text-blue-200 dark:border-blue-400/20 backdrop-blur-sm
        `,
                warning: `
          bg-yellow-500/10 text-yellow-600 border-yellow-400/40
          dark:bg-yellow-500/10 dark:text-yellow-200 dark:border-yellow-400/20 backdrop-blur-sm
        `,
                error: `
          bg-red-500/10 text-red-500 border-red-400/40
          dark:bg-red-500/10 dark:text-red-200 dark:border-red-400/20 backdrop-blur-sm
        `,
                success: `
          bg-green-500/10 text-green-500 border-green-400/40
          dark:bg-green-500/10 dark:text-green-200 dark:border-green-400/20 backdrop-blur-sm
        `,
            },
        },
        defaultVariants: { variant: "default" },
    }
);

function Alert({
    className,
    variant,
    children,
    onClose,
    ...props
}: React.ComponentProps<"div"> &
    VariantProps<typeof alertVariants> & {
        onClose?: () => void;
    }) {
    const Icon = icons[variant || "default"];

    return (
        <div className={cn(alertVariants({ variant }), className)} {...props}>
            <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 opacity-90" />

            <div className="flex-1">{children}</div>

            {onClose && (
                <button
                    onClick={onClose}
                    className="ml-2 opacity-70 hover:opacity-100 transition cursor-pointer"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("font-semibold tracking-tight mb-0.5", className)}
            {...props}
        />
    );
}

function AlertDescription({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div
            className={cn("text-sm opacity-90 leading-relaxed", className)}
            {...props}
        />
    );
}

export { Alert, AlertTitle, AlertDescription };
