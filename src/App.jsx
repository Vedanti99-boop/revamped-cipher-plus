import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  
  return (
    <>
      <div className="m-0 p-0 bg-cover bg-center bg-no-repeat h-screen bg-fixed" style={{ backgroundImage: "url('images/background.jpg')" }}>
        <Home/>
      </div>
    </>
  );
}

export default App;
