import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full">
      <body className="flex flex-col min-h-screen w-full bg-gradient-to-br from-[#010c24] via-[#103460] to-[#1b2d3a] transition-all duration-500 ease-in-out">
        <header className="sticky top-0 z-50 px-4 sm:px-6 md:px-8 bg-transparent backdrop-blur-md">
          <Header />
        </header>
        <main className="flex-grow w-full">{children}</main>
        <footer className="sticky bottom-0 z-50 px-4 sm:px-6 md:px-8 py-2 text-center text-gray-300 bg-transparent backdrop-blur-md">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
