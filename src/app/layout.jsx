import "@/app/styles/globals.css";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "DingDong",
  description: "Chat seru bareng teman di DingDong",
  icons: {
    icon: "/mainLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={sora.variable}>
      <body className={sora.className}>
        {children}
      </body>
    </html>
  );
}
