import { useEffect, useState } from "react";
import DonatedCards from "./DonatedCards";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(4);


    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation'));

        if(donationItems) {
            setDonation(donationItems);
        }
        else{
            setNoFound('Nobody Donated Here')
        }

    },[])
    return (
        <div className="py-10">
            {
            noFound ? <p className="flex justify-center items-center text-4xl font-bold text-black my-28">{noFound}</p> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                      donation.slice(0,isShow).map(card => <DonatedCards key={card.id} card={card}></DonatedCards>)
                    }
                </div>
            }
            {
            donation.length > 4 && 
                <div className="text-center mt-9">
                        <div className = {isShow === donation.length ? "hidden" : ' '}>
                            <button onClick={() => setIsShow(donation.length)} className=" py-3 rounded-lg px-10 text-white font-bold  bg-[#009444]">See All</button>
                        </div>
                </div>
            }
        </div>
        
    );
};

export default Donation;
