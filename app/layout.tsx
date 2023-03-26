import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Mayu Next App",
  description: "Made with Next and Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
