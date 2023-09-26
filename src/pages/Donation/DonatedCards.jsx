const DonatedCards = ({ card }) => {
  const { id, picture, title, category, category_bg, card_bg, text_button_bg,price } =
    card;

  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl shadow-xl mt-12"style={{ backgroundColor: `${card_bg}` }}>
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
        <img src={picture}alt="image"className="h-full w-full object-cover"/>
      </div>
      <div className="p-6">
            <button className="rounded-md p-2 font-bold" style={{backgroundColor: `${category_bg}`,color: `${text_button_bg}`,}}>{category}
            </button>
            <h2 className="text-2xl font-bold text-black mt-2" >{title}</h2>
            <h2 className="text-lg font-bold mt-2" style={{ color: `${text_button_bg}` }}>{price}</h2>
            <button className="rounded-md py-3 px-5 text-lg font-bold text-white mt-3" style={{backgroundColor: `${text_button_bg}`,}}>View Details
            </button>
      </div>
    </div>
  );
};

export default DonatedCards;
