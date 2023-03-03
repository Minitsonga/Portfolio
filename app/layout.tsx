/* eslint-disable @next/next/no-head-element */

import "./globals.css";
import NavBar from "./navBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar></NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
