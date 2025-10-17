import "./global.css";
import bg from "./assets/images/background.mp4";
import Router from "./Router";
import { generateStarfall, IStar } from "./utils/starfall";
import { useEffect, useState } from "react";
import TwinklingStar from "./components/layout/TwinklingStar";

const App: React.FC = () => {
  const [stars, setStars] = useState<IStar[]>([]);

  useEffect(() => {
    const newStars = generateStarfall(100);
    setStars(newStars);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden mobile:overflow-auto mobile:bg-black after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full mobile:after:hidden">
      {stars.map((star, index) => (
        <TwinklingStar key={`star-${index}`} {...star} />
      ))}
      <video
        src={bg}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 -z-10 mobile:hidden"
      />
      <Router />
    </section>
  );
};

export default App;
