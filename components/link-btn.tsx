import { ChevronsRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
    text: string;
    link: string;
    className?: string;
    blank?: boolean;
}

export const LinkBtn = ({ text, className, link, blank }: Props) => {
    return (
        <Link href={link} target={blank ? "_blank" : undefined}>
            <Button size={"sm"} variant={"link"} className={className}>
                <ChevronsRight className="mr-1 w-5 h-5" />
                {text}
            </Button>
        </Link>
    );
};
