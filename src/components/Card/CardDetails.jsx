import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CardDetails = ({card}) => {
    const {id, picture, title, category, category_bg, card_bg, text_button_bg, description } = card;
    const handleAddDonation = ()=> {
        toast("You have donate successfully");
        const addedDonation = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            addedDonation.push(card)
            localStorage.setItem('donation', JSON.stringify(addedDonation))

        }
        else{
            addedDonation.push(...donationItems, card)
            localStorage.setItem('donation', JSON.stringify(addedDonation))
        }
    }

    return (
        <>
         <div className="py-12 relative">
            <img className="w-full" src={picture} alt="" />
            <div className="absolute w-full h-36 bg-black opacity-40 -mt-36">
            </div>
                <button onClick={handleAddDonation} className="btn absolute -mt-24 ml-10 border-none text-white"style={{ backgroundColor: `${text_button_bg}` }} >Donate $290</button>
        </div> 
        <div className="mt-7 px-9 md:px-9 lg:px-1 pb-12">
                <h1 className="text-4xl font-bold mb-5 ">{title}</h1>
                <p className="text-justify" >{description}</p>
        </div>
        <ToastContainer /> 
        </>
    );
};

export default CardDetails;