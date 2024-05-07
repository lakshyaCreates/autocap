import Link from "next/link";
import { LinkBtn } from "./link-btn";

export const UnderDevelopment = () => {
    return (
        <div className="font-kanit items-center justify-center text-center min-h-[75vh] flex flex-col space-y-3">
            <h1 className=" font-bold text-6xl">
                Under&nbsp;
                <span className="text-primary underline underline-offset-4">
                    Development
                </span>
            </h1>
            <div className="text-muted-foreground text-lg max-w-xl">
                <p>
                    {`The page you're currently looking for is under
                    development. `}
                    <br />
                    We are working hard behind the scenes to bring amazing
                    content.
                    <br /> While these pages are offline, you can check
                    out&nbsp;
                    <Link href="/" className="text-primary font-semibold">
                        Home Page
                    </Link>
                    &nbsp;or fill up the&nbsp;
                    <Link
                        href="/contact"
                        className="text-primary font-semibold"
                    >
                        Contact Form
                    </Link>
                </p>
            </div>
        </div>
    );
};
