import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const SinglePost = () => {
  return (
    <>
      <Navbar />
      <div className="single">
        <div className="content">
          <img src="" alt="" />
          <div className="user">
            <img src="" alt="" />
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
                <button>Edit</button>
              </Link>
              <button>Delete</button>
            </div>
          </div>
          <h1>Lorem ipsum dolor sit amet</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iure repudiandae aliquam mollitia voluptatibus. Vero distinctio
            maxime delectus a soluta, saepe architecto atque illo exercitationem
            nostrum doloremque debitis quaerat accusantium aliquid labore iusto
            veniam suscipit consequatur, magni maiores repudiandae! Ducimus illo
            incidunt quisquam impedit ipsam odit quis cupiditate illum, libero
            corrupti, esse dolor pariatur numquam suscipit magni cumque nobis
            nemo consequuntur aut exercitationem ratione! Rerum tenetur dolorem
            nulla quisquam illo, sapiente odit eum, cupiditate assumenda dolores
            fugiat deserunt esse nam aliquid at illum inventore optio obcaecati!
            Ipsa eos consequatur repellat optio a explicabo mollitia illo
            delectus? Accusantium, voluptatem? A, dicta!
          </p>
        </div>
        <div className="menu">m</div>
      </div>
      <Footer />
    </>
  );
};

export default SinglePost;
