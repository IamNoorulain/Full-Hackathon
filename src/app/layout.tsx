import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Hackathon By NOOR",
  description: "Hackathon Project for GIAIC | Template 4",
  openGraph: {
    title: "Hackathon By NOOR",
    description: "Hackathon Project for GIAIC | Template 4",
    url: "https://my-hackathon-six.vercel.app/",
    siteName: "Noor's Site",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
