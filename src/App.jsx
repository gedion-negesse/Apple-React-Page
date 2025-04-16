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

import { Route, Routes } from "react-router-dom";
import Mainsection from "./components/Mainsection/Mainsection.jsx";
import Store from "./components/Page/Store.jsx";
import Mac from "./components/Page/Mac.jsx";
import Ipad from "./components/Page/Ipad.jsx";
import Iphone from "./components/Page/Iphone.jsx";
import Watch from "./components/Page/Watch.jsx";
import AirPod from "./components/Page/AirPod.jsx";
import TvHome from "./components/Page/TvHome.jsx";
import Entartainment from "./components/Page/Entartainment.jsx";
import Accessories from "./components/Page/accessories.jsx";
import Four04 from "./components/Page/Four04.jsx";
import Shared from "./components/Sharedpage/Shared.jsx";
import Search from "./components/Page/Search.jsx";
import Cart from "./components/Page/Cart.jsx";
import SingleProduct from "./components/Page/SingleProduct.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route path="/" element={<Mainsection />}></Route>
          <Route path="store" element={<Store />}></Route>
          <Route path="mac" element={<Mac />}></Route>
          <Route path="ipad" element={<Ipad />}></Route>
          <Route path="iphone" element={<Iphone />} />

          <Route path="iphone/:ID" element={<SingleProduct />} />

          <Route path="watch" element={<Watch />}></Route>
          <Route path="airpod" element={<AirPod />}></Route>
          <Route path="tv&home" element={<TvHome />}></Route>
          <Route path="entratainment" element={<Entartainment />}></Route>
          <Route path="accessories" element={<Accessories />}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="search" element={<Search />}></Route>
          {/*<Route path="*" element={<Four04 />}></Route>*/}
          <Route path="*" element={<Mainsection />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
