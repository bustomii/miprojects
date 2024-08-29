import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Portfolio",
    description: "This is my portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="active-scroll">{children}</body>
        </html>
    );
}
