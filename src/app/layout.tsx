import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme";
import { ClerkProvider } from "@clerk/nextjs";
import ReactQueryProvider from "@/providers/react-query";
import { Toaster } from "@/components/ui/sonner";
import { dark } from "@clerk/themes";

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Innovexa — Make Time Tap",
  description:
    "Studio-grade Macropads + smart software. Automate tasks into one satisfying press — pro switches, cloud profiles, and rapid customization.",
  openGraph: {
    title: "Innovexa — Make Time Tap",
    description:
      "Studio-grade Macropads + smart software. Automate tasks into one satisfying press.",
  },
};

export default function RootLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      appearance={{ baseTheme: dark }}
    >
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="apple-mobile-web-app-title" content="InnoVexa" />
        </head>
        <body
          className={`${dmSans.className} antialiased`}
          cz-shortcut-listen="true"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            <ReactQueryProvider>
              {children}
              <Toaster />
            </ReactQueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
