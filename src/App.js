import Generos from "./conponents/generos/Generos";
import Footer from "./conponents/ui/Footer";
import Navbar from "./conponents/ui/NavBar";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Generos/>
      </div>
      <Footer />
    </>
  );
}

export default App;
