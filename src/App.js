import { Header, Footer } from "./pages";
import "./App.css";
import { Modal, Banner, Newsletter, Articles } from "./components";
import { useStateValue } from "./context/DataLayer";

function App() {
  const [{ modal }] = useStateValue();
  return (
    <div className="app">
      <div>
        <Header />
        <Banner />
        <Newsletter />
        <Articles />
        <Footer />
      </div>
      {modal && <Modal />}
    </div>
  );
}

export default App;
