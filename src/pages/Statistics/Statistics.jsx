import { useEffect, useState } from "react";

import PieChartPage from "../../components/PieChartPage/PieChartPage"

const Statistics = () => {
    const [donations,setDonations] = useState([])
    const [totalDonation,setTotalDonation] = useState(0)
   
    console.log(donations)

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donation')) || [];
        setDonations(donationItems);
        const totalDonationCalculation = donationItems.length / 12;
        setTotalDonation(totalDonationCalculation);
        console.log(totalDonationCalculation);
    }, []);
    

    return (
        <div className=" max-w-screen-xl mx-auto px-6">
           
           <PieChartPage donations={donations} totalDonation={totalDonation}></PieChartPage>
        </div>
    );
};

export default Statistics;

