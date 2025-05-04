export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body dir="rtl" className="px-12 py-4 overflow-x-hidden min-h-screen">
        {children}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
