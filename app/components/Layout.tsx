import React from 'react';
import { Header } from './header/Header';
import { FuturisticBackground } from './ui/FuturisticBackground';
import { Menu } from './sidebar/Menu.client';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <FuturisticBackground />
      <Menu />
      <div className="flex flex-col flex-1 transition-all duration-300 ease-in-out">
        <Header />
        <main className="flex-1 overflow-hidden">{children}</main>
      </div>
    </div>
  );
};