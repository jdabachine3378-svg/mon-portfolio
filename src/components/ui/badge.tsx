// src/components/ui/badge.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { badgeVariants } from "./badge-variants";
export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement> {
    variant?: string;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant, ...props }, ref) => (
        <div
            ref={ref}
            className={cn(badgeVariants({ variant, className }))}
            {...props}
        />
    )
);

Badge.displayName = "Badge";

export { Badge };
