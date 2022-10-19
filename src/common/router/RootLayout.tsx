import React from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: React.FC = () => {
  return (
    <div>
      <header>header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
};
