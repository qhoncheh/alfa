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
        className="min-h-screen overflow-y-auto w-full flex bg-black flex-col justify-center items-center "
      >
          <Header />
        <main className=" bg-black">{children}</main>
          <FooterContainer />
      
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
