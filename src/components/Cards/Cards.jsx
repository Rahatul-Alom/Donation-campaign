
import DonationCards from "./DonationCards";

const Cards = ({cards}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24">
            {
               cards.map(card => <DonationCards key={card.id} card={card} ></DonationCards>)
            }
        </div>
    );
};

export default Cards;