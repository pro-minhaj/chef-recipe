import { useContext } from "react";
import { userContext } from "../../Auth_Context/Auth_Context";

import Slider from "react-slick";
import { useLoaderData } from "react-router-dom";
import Chef_Recipe from "../../Componetes/Chef_Recipe/Chef_Recipe";

const Home = () => {
    const {user} = useContext(userContext);
    const chefData = useLoaderData();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className="py-20">
        <Slider {...settings}>
            {
                chefData.map(chef => <Chef_Recipe key={chef.id
                } chef={chef}></Chef_Recipe>)
            }
        </Slider>
      </div>
    );
};

export default Home;