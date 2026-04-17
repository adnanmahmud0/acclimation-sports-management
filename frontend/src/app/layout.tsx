import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { FounderCard } from "@/components/founder-card";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Acclimation Sports | Where Economic Precision Meets NBA Domination",
    template: "%s | Acclimation Sports",
  },
  description: "Data-driven NBA representation, career management, and salary cap analytics led by Joe Grekoski. Expert advocacy for NBA players, college prospects, and elite high-school talent.",
  keywords: ["NBA Agency", "Basketball Representation", "NIL Deals", "Contract Negotiation", "Salary Cap Analytics", "NBA Draft Preparation", "Sports Management"],
  authors: [{ name: "Joe Grekoski" }],
  creator: "Acclimation Sports Management",
  publisher: "Acclimation Sports Management",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://acclimation-sports.com"), // Replace with actual domain if known
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Acclimation Sports | Where Economic Precision Meets NBA Domination",
    description: "Data-driven NBA representation led by Joe Grekoski.",
    url: "https://acclimation-sports.com",
    siteName: "Acclimation Sports Management",
    images: [
      {
        url: "/logo/AcclimationLogo-Vartical.jpg",
        width: 1200,
        height: 630,
        alt: "Acclimation Sports Management Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acclimation Sports | Where Economic Precision Meets NBA Domination",
    description: "Data-driven NBA representation led by Joe Grekoski.",
    images: ["/logo/AcclimationLogo-Vartical.jpg"],
  },
  icons: {
    icon: "/logo/AcclimationLogo-Vartical.jpg",
    shortcut: "/logo/AcclimationLogo-Vartical.jpg",
    apple: "/logo/AcclimationLogo-Vartical.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#05070a] text-white">
        <TooltipProvider>
          <Navbar />
          {/* <FounderCard /> */}
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
