export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        dir="rtl"
        className="px-12 py-4 overflow-hidden h-screen flex flex-col w-full"
      >
        {children}
      </body>
    </html>
  );
}
