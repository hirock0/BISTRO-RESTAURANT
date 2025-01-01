import Banner from "./components/home/Banner/Banner";
import Section_1 from "./components/home/Section_1/Section_1";
import Section_2 from "./components/home/Section_2/Section_2";

const App = () => {
  return (
    <main>
      <section>
        <Banner />
      </section>
      <section>
        <Section_1 />
      </section>
      <section>
        <Section_2 />
      </section>
    </main>
  );
};

export default App;
