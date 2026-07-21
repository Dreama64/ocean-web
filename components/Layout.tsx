import Header from "./Header";
import Hero from "./Hero";
import Cards from "./Cards";

export default function Layout() {
  return (
    <>
      <Header />

      <div style={{ height: 22 }} />

      <Hero />

      <Cards />
    </>
  );
}