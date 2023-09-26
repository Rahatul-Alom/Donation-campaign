import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "./CardDetails";

const Card = () => {
    const [card,setCard] = useState([])

    const {id} = useParams()

    const cards = useLoaderData()

    useEffect(() => {
        const findCard = cards.find(card => card.id === id)
        setCard(findCard)
    },[id,cards])
    return (
        <div>
           {
            <CardDetails card ={card}></CardDetails>
            }
        </div>
    );
};

export default Card;