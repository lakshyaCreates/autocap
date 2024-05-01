import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronsRight } from "lucide-react";

interface Props {
    title: string;
    description: string | undefined;
    date: string;
    slug: string;
    thumbnail: string | undefined;
}

export const ProjectsPromoCard = ({
    title,
    description,
    date,
    slug,
    thumbnail,
}: Props) => {
    return (
        <Card className="space-y-0 border-y-0 border-x-2 border-border shadow-lg">
            <Image
                width={400}
                height={400}
                src={thumbnail || ""}
                alt="Thar-02"
                className="rounded-t-lg"
            />
            <CardHeader className="font-kanit">
                <CardTitle className="text-3xl tracking-normal">
                    <Link href={slug}>{title}</Link>
                </CardTitle>
                <CardDescription className="">{description}</CardDescription>
                <Separator />
                <div className="flex justify-between w-full">
                    <Button variant={"link"} className="-ml-4" asChild>
                        <Link href={slug}>
                            <ChevronsRight className="h-5 w-5 mt-0.5" />
                            <span>Explore</span>
                        </Link>
                    </Button>
                    <div className="mt-3 text-sm">
                        <p className="text-muted-foreground -mt-0.5">{date}</p>
                    </div>
                </div>
            </CardHeader>
        </Card>
    );
};
