import { cn } from "@/lib/utils";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export const SectionHeading = ({ children, className }: Props) => {
    return (
        <h1
            className={cn(
                "text-6xl lg:text-7xl font-semibold font-kanit",
                className
            )}
        >
            {children}
        </h1>
    );
};

export const SectionHeadingHighlight = ({ children }: Props) => {
    return <span className="headingHighlight">{children}</span>;
};
