
const DonationCards = ({card}) => {
  const {picture,title,category, category_bg, card_bg,text_button_bg} = card
    
    return (
        <div>
        <div className="card shadow-xl" style={{backgroundColor:`${card_bg}`}}>
            <figure>
            <img className="w-full" src={picture} alt=""/>
            </figure>
            <div className="card-body">
                <div className="card-actions justify-start">
                    <button className="rounded-md p-2 font-semibold text-blue-400"   style={{
                         backgroundColor: `${category_bg}`, color: `${text_button_bg}`}}>{category}</button>
                </div>    
            <h2 className="card-title"style={{color: `${text_button_bg}`}} >{title}</h2>
            </div>
        </div>
        </div>
    );
};

export default DonationCards;
