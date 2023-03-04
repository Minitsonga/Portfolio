/* eslint-disable @next/next/no-head-element */

import "./globals.css";
import NavBar from "./navBar";
import SideLinks from "./sideLinks";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar/>
        <SideLinks/>
        <main>{children}</main>
      </body>
    </html>
  );
}
