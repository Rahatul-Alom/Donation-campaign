import { useEffect, useState } from "react";
import DonatedCards from "./DonatedCards";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);


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
        <div>
            {
            noFound ? <p className="flex justify-center items-center text-4xl font-bold text-black my-28">{noFound}</p> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {
                      isShow ? donation.map(card => <DonatedCards key={card.id} card={card}></DonatedCards>) :
                      donation.slice(0,4).map(card => <DonatedCards key={card.id} card={card}></DonatedCards>)
                    }
                </div>
            }
            {
                donation.length > 4 &&
                 <div className="text-center mt-9">
                     <button onClick={() => setIsShow(!isShow)} className=" btn btn-primary">See All</button>
                 </div>
            }
        </div>
        
    );
};

export default Donation;