import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import ChatBot from "./components/ui/ChatBot";
import AmbientBackground from "./components/ui/AmbientBackground";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full">
      <body className="flex flex-col min-h-screen w-full text-slate-100 transition-all duration-500 ease-in-out">
        <AmbientBackground />
        <header className="sticky top-0 z-50 w-full border-b border-[#1b2333] bg-[#030407]/85 px-4 backdrop-blur-md sm:px-6 md:px-8">
          <Header />
        </header>
        <main className="w-full flex-grow">{children}</main>
        <footer className="w-full border-t border-[#1b2333] bg-[#030407]/85 px-4 py-3 text-center text-slate-500 backdrop-blur-md sm:px-6 md:px-8">
          <Footer />
        </footer>
        <ChatBot />
      </body>
    </html>
  );
}
