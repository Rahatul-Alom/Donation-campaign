import { Link } from "react-router-dom";

const DonationCards = ({ card }) => {
  const {id, picture, title, category, category_bg, card_bg, text_button_bg } =card;

  return (
    <Link to={`/cards/${id}`}>
      <div className="card shadow-xl" style={{ backgroundColor: `${card_bg}` }}>
        <figure>
          <img className="w-full" src={picture} alt="" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start">
            <button
              className="rounded-md p-2 font-semibold text-blue-400"style={{backgroundColor: `${category_bg}`,color: `${text_button_bg}`,}}>
                {category}
            </button>
          </div>
          <h2 className="card-title" style={{ color: `${text_button_bg}` }}>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default DonationCards;
