import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import "./page.scss";

export default function Home() {
  return (
    <div className="page">
      <Header />
      <Hero/>
    </div>
  );
}
