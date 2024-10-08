import React from 'react';

export const FuturisticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-hephaestus-background-dark opacity-90"></div>
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-20"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-hephaestus-primary to-transparent opacity-5"></div>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-hephaestus-secondary to-transparent opacity-5"></div>
    </div>
  );
};