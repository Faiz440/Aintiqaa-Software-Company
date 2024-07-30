import "./main.css";
import AppRouter from "./Routors";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    <div>
      <Navbar />
      <HelmetProvider>
      <AppRouter />
      </HelmetProvider>
      <Footer />
    </div>
  );
}

export default App;
