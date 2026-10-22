import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.biztali.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Biztali | Simple Business Management for Growing Teams",
    template: "%s | Biztali",
  },
  description:
    "Bring sales, inventory, expenses and branch operations together with Biztali, a practical business management platform for small and growing businesses.",
  applicationName: "Biztali",
  keywords: [
    "business management software",
    "inventory management",
    "sales tracking",
    "SME software",
    "Kenya business software",
    "KRA eTIMS",
    "branch management",
    "cashflow tracking",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Biztali",
    title: "Biztali | Simple Business Management for Growing Teams",
    description:
      "Run sales, stock, expenses and branches with more clarity. Discover Biztali, the business management platform built for growing teams.",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biztali | Simple Business Management for Growing Teams",
    description:
      "Bring sales, inventory, expenses and branch operations together with Biztali.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo/Biztali_logo.png",
    apple: "/logo/Biztali_logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f9ff",
  width: "device-width",
  initialScale: 1,
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
