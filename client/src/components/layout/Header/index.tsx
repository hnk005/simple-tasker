import { ReactElement } from "react";

const Header = (): ReactElement => {
    return (
        <header className="bg-gray-50 p-4 flex items-center border-b border-gray-200">
            <div className="container mx-auto flex items-center p-5">
                <div className="inline-flex items-center">
                    <img
                        src="/Logo.png"
                        alt="Logo"
                        className="w-10 h-10 mr-2"
                    />
                    <span className="text-green-600 text-xl font-semibold">Simple Tasker</span>
                </div>
            </div>
        </header>
    );
};

export default Header;