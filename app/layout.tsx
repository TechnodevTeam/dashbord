import "./globals.css";

export const metadata = {
  title: "EventSync Admin",
  description: "Administration EventSync",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}