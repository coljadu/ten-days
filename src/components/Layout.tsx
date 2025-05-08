import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col px-4 py-6 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            <header className="mb-6 text-xl font-bold">🚀 My Project Hub</header>
            <main className="flex-grow">{children}</main>
            <footer className="mt-8 text-sm text-gray-500">© 2025</footer>
        </div>
    );
};

export default Layout;
