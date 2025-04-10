
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DevDot from '../ui/dev-dot';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <DevDot />
      <Footer />
    </div>
  );
};

export default MainLayout;
