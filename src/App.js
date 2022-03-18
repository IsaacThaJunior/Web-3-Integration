import React from "react";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/footer";
import Body from "./components/Body/Body";

// import maintext from './components/text'

const App = () => {
  return (
    <>
      <Nav />
      {/* <div className="bg-white w-full "></div> */}
      <Body />

      <Footer />
    </>
  );
};

export default App;
