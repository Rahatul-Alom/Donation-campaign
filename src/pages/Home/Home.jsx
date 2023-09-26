import Banner from "../../components/Header/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const cards = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Cards cards ={cards}></Cards>
        </div>
    );
};

export default Home;