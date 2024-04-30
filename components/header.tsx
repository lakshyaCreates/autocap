import Link from "next/link";
import Image from "next/image";
import { NavItems } from "./nav-items";

export const Header = () => {
    return (
        <header className="z-50 fixed top-0 w-full border-b backdrop-blur-3xl dark:bg-black/[0.6] dark:border-white/[0.1]">
            <div className="container flex h-20 max-w-2xl md:max-w-4xl items-center lg:max-w-7xl mx-auto justify-between">
                <Image
                    width={200}
                    height={150}
                    src="/logo-transparent.png"
                    alt="AutoCap Car Detailing Studio Logo"
                />
                <NavItems />
            </div>
        </header>
    );
};
