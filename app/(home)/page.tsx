import Hero from "../_sections/Hero";
import Features from "../_sections/Features";
import Demo from "../_sections/Demo";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <Demo />
    </main>
  );
}
