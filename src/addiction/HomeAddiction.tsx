import React from "react";
import HeroSection from "./HeroSectionAddiction";
import NavbarAddiction from "./NavbarAddiction";
import FooterAddiction from "./FooterAddiction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavbarAddiction />
      <HeroSection />
      {/* <FooterAddiction /> */}
    </div>
  );
}