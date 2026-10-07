import "./globals.css";

export const metadata = {
  title: "HOCO Store",
  description: "HOCO electronics and smart accessories"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}