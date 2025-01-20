import "./CSS/bootstrap.css";
import "./CSS/style.css";
import "./js/footerRespo.js";
import HeaderSection from "./components/HeaderSection/HeaderSection.jsx";
import FooterSection from "./components/FooterSection/FooterSection.jsx";
import NewSection from "./components/NewSection/NewSection.jsx";
import FirstSection from "./components/FirstSection/FirstSection.jsx";
import SecondSection from "./components/SecondSection/SecondSection.jsx";
import ThirdSection from "./components/ThirdSection/ThirdSection.jsx";
import FourthSection from "./components/FourthSection/FourthSection.jsx";
import FifthSection from "./components/FifthSection/FifthSection.jsx";
function App() {
  return (
    <>
      <HeaderSection />
      <NewSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <FooterSection />
    </>
  );
}

export default App;
