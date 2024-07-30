import { Link } from "react-router-dom";
import image1 from "./images/main1.png";
const Baner = () => {
  return (
    <div className="container" style={{ position: "relative" }}>
      <div className="homepage1">
        <img src={image1} alt="main" className="hero_image" />
      </div>
      <div className="centered">
        <h2 className="h2">Idea! That you can arise with</h2>
      </div>
      <div className="center">
        <p className="p">
          Serving Unified Technology To The Digital World Across Mobile, Web
          &apos;To The Great Ideas&apos; &apos;To The Global Startup&apos;
          &apos;To The Enterprise Companies&apos;
        </p>
        <br />
        </div>
        <div className="center1">
         <Link to="/Explore" className="btn btn-primary btn_link arrow-btn">
          Explore Work
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
        </div> 
     
    </div>
  );
};

export default Baner;
