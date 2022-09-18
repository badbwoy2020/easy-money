import React from "react";
import "./Home.css";
import { Modal, Banner, Newsletter, Articles } from "../../components";
import { Header, Footer } from "../../pages";
import { useAuth } from "../../context/LoginContext";

function Home() {
  const { modal } = useAuth();
  return (
    <div className="home">
      <>
        <Header />
        <Banner />
        <Newsletter />
        <Articles />
        <Footer />
      </>
      {modal && <Modal />}
    </div>
  );
}

export default Home;
