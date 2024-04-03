import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Assignment 1-2",
  description: "Curtis Kauer's in class assignment on 4/3/2024",
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
