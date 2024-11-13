// app/layout.js

import React from 'react';
import './globals.css';
import ReactQueryProvider from './ReactQueryProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}

