//import Image, { StaticImageData } from "next/image";
import { Versions } from "@/components/Versions";
import { Newsletter } from "@/components/Newsletter";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import { Gallery } from "@/components/Gallery";
import { KeepTouch } from "@/components/KeepTouch";
export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Gallery />
      <Versions />
      <Newsletter />
      <KeepTouch />
      <Footer />
    </main>
  );
}
