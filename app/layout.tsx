import type { Metadata } from "next";
import "./globals.css";

import { Kanit } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
const kanit = Kanit({
    subsets: ["latin"],
    // display: "swap",
    variable: "--font-kanit",
    weight: ["300", "400", "500", "600", "700"],
});
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
    title: {
        default: "AutoCap Car Detailing Studio",
        template: "%s | AutoCap Car Detailing Studio",
    },
    description:
        "AutoCap Car Detailing Studio specializes in premium car paint protection services, including ceramic coatings and paint protection films. Our meticulous detailing processes ensure your vehicle's paint remains flawless, enhancing its appearance and durability. Discover the ultimate in automotive paint protection with AutoCap",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={kanit.variable}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    disableTransitionOnChange
                >
                    <Header />
                    <main className="mt-20">
                        <div className="h-full w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
                            {children}
                        </div>
                    </main>
                    <Footer />
                    <Toaster />
                    {/* <Footer /> */}
                </ThemeProvider>
                <SpeedInsights />
            </body>
        </html>
    );
}
