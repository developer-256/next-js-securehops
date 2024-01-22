import Grid from "./components/grid";
import BanUnderGrid from "./components/BanUnderGrid";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Grid />
      <BanUnderGrid />
    </main>
  );
}
