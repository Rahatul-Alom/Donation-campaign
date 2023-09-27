import { useEffect, useState } from "react";

import PieChartPage from "../../components/PieChartPage/PieChartPage"

const Statistics = () => {
    const [donations,setDonations] = useState([])
    const [totalDonation,setTotalDonation] = useState(12)
   
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation') || '[]');
        setDonations(donationItems);
        const yourDonation =   totalDonation / donationItems.length;
        console.log(yourDonation)
    
    }, [donations.length,totalDonation]);
    

    return (
        <div className=" max-w-screen-xl mx-auto px-6">    
           <PieChartPage donations={donations} totalDonation={totalDonation}></PieChartPage>
        </div>
    );
};

export default Statistics;

