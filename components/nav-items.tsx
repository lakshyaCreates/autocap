"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetTrigger,
} from "./ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useMobileNavStore } from "@/store/mobileNav";

const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Projects", href: "/projects" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
];

export const NavItems = () => {
    return (
        <nav className="font-kanit font-medium">
            <ul className="hidden lg:flex gap-6 mt-2 text-xl uppercase">
                <NavLinks />
            </ul>
            <div className="block lg:hidden">
                <MobileNav />
            </div>
        </nav>
    );
};

const MobileNav = () => {
    const isOpen = useMobileNavStore((state: any) => state.isOpen);
    const open = useMobileNavStore((state: any) => state.open);

    return (
        <Sheet open={isOpen}>
            <SheetTrigger onClick={open}>
                <Menu className="w-8 h-8 mt-4" />
            </SheetTrigger>
            <SheetContent
                side={"top"}
                className="w-screen h-screen flex min-h-screen items-center justify-center"
            >
                <div className="text-7xl font-kanit font-medium pb-16">
                    <ul className="flex flex-col space-y-3 uppercase text-center">
                        <NavLinks />
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

const NavLinks = () => {
    const pathname = usePathname();
    const close = useMobileNavStore((state: any) => state.close);

    return (
        <>
            {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                    <li
                        onClick={close}
                        className={
                            item.href === pathname
                                ? "text-primary"
                                : "text-neutral-400 hover:text-neutral-200 transition-colors duration-200"
                        }
                    >
                        {item.title}
                    </li>
                </Link>
            ))}
        </>
    );
};
