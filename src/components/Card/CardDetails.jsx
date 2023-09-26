
const CardDetails = ({card}) => {
    const {id, picture, title, category, category_bg, card_bg, text_button_bg, description } = card;
    return (
        <div className="py-12">
            <img className="w-full" src={picture} alt="" />
            <div className="mt-12">
                <h1 className="text-4xl font-bold mb-5 ">{title}</h1>
                <p className="text-justify" >{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;