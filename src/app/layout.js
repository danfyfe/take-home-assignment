import "./globals.css";

export const metadata = {
  title: "SkyHop | React Assessment",
  description: "React Assessment for SkyHop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
