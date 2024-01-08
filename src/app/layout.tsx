import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Convo Form - Transforming User Experience with AI-Powered Conversational Forms",
  description:
    "Imagine Google Forms, but supercharged with AI for an improved user experience, This web application allow you to build engaging and interactive forms that are easy to fill and fun to answer.",
  applicationName: "Convo Form",
  authors: [
    {
      name: "Utkarsh Anand",
      url: "https://www.linkedin.com/in/utkarshanand93/",
    },
  ],
  keywords: [
    "convoform",
    "convo form",
    "convoform.com",
    "nextjs",
    "openai",
    "gpt3",
    "ai",
    "artificial intelligence",
    "forms",
    "form builder",
    "google forms alternative",
  ],
  creator: "Utkarsh Anand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider signInUrl="/auth/sign-in" signUpUrl="/auth/register">
      <html lang="en">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
