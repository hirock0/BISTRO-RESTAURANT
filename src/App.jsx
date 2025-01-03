import Banner from "./components/home/Banner/Banner";
import Section_1 from "./components/home/Section_1/Section_1";
import Section_2 from "./components/home/Section_2/Section_2";
import Section_3 from "./components/home/Section_3/Section_3";
import Section_4 from "./components/home/Section_4/Section_4";
import Section_5 from "./components/home/Section_5/Section_5";

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
      <div data-aos="fade-up" className="  container mx-auto h-52 px-5 my-10 text-white bg-black flex items-center justify-center">
        <h1 className=" text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-xl">
          Call Us: +88001700554293
        </h1>
      </div>
      <section>
        <Section_3 />
      </section>
      <section>
        <Section_4 />
      </section>
      <section>
        <Section_5 />
      </section>
    </main>
  );
};

export default App;
