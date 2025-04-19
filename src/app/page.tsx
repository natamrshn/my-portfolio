import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import "./page.scss";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Hero />
      <Experience />
    </div>
  );
}
