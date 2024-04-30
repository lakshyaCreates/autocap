import { ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";

interface Props {
    text: string;
    className?: string;
}

export const LinkBtn = ({ text, className }: Props) => {
    return (
        <Button size={"sm"} variant={"link"} className={className}>
            <ChevronsRight className="mr-1 w-5 h-5" />
            {text}
        </Button>
    );
};
