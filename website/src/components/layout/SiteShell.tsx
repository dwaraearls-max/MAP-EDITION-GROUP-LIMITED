import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { WhatsAppButton } from "./WhatsAppButton";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
