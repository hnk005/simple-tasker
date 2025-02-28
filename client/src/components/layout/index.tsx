import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 container mx-auto p-4">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
