import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  scrollToServices?: () => void;
  scrollToContact?: () => void;
}

const Layout = ({ children, scrollToServices, scrollToContact }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        scrollToServices={scrollToServices}
        scrollToContact={scrollToContact}
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;