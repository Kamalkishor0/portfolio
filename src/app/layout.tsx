import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamalkishor Singh | Full-stack engineer",
  description:
    "Portfolio of Kamalkishor Singh, a full-stack engineer building real-time products and practical ML systems.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
