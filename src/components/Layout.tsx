
import React from 'react';
import TopBar from '@/components/layout/TopBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PageSpeedOptimizer from '@/components/PageSpeedOptimizer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <PageSpeedOptimizer />
      <TopBar />
      <Header />
      
      {/* Main Content */}
      <main>
        {children}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
