import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Feedback from "../components/Feedback";
import Feature from "../components/Feature";
import ShopByCategory from "../components/ShopCategories";
import { Helmet } from "react-helmet";
import Title from "../components/Title";

function Home() {
  return (
    <div>
      <Title  match={"Home"}/>
      <div>
        <h1 className="mt-10 text-5xl text-center mb-5">Banner Section</h1>
        <div
          data-aos="fade-in"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <Banner />
        </div>
      </div>

      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          Gallery Section
          <div>
            <Gallery />
          </div>
        </h1>
      </div>
      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          Shop Category
          <div>
            <ShopByCategory />
          </div>
        </h1>
      </div>
      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          Feedback Section
          <div>
            <Feedback />
          </div>
        </h1>
      </div>

      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          Feature Section
          <div>
            <Feature />
          </div>
        </h1>
      </div>
      {/* 
      <div>
        <h1 className="mt-10 text-5xl text-center mb-10">
          ALL TOY Section
          <div>
            <Alltoy />
          </div>
        </h1>
      </div> */}
    </div>
  );
}

export default Home;
