import * as React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <React.StrictMode>
        <div className="text-black">
          <Header />
          <Main />
          <Footer />
        </div>
      </React.StrictMode>
    </>
  );
}
