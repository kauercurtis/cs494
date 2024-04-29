import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment 5.1",
  description: "Curtis Kauer, Oregon State University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
