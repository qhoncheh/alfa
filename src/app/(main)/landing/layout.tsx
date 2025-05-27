import { Header } from "@/components/Header";
import FooterContainer from "@/components/Footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        dir="rtl"
        className="min-h-screen overflow-y-auto w-full flex flex-col justify-center items-center "
      >
        <header className="flex items-center justify-between w-full">
          <Header />
        </header>
        <main className="flex-1">{children}</main>
        <footer className="rounded-3xl bg-[#F9F9F9] w-full px-7 py-8 flex flex-col gap-12">
          <FooterContainer />
        </footer>

        <div id="modal-root"></div>
      </body>
    </html>
  );
}
