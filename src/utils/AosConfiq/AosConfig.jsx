import AOS from "aos";
import "aos/dist/aos.css";
const AosConfig = () => {
  return AOS.init({
    offset: 200,
    duration: 600,
    easing: "ease-in-out",
    delay: 100,
    once: false,
    mirror: true,
    anchorPlacement: "top-bottom",
    disable: "mobile",
  });
};

export default AosConfig;
