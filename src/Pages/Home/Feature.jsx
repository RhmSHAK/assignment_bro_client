import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

const Feature = () => {
    const[features,setFeature]= useState([])
     
    useEffect(()=>{
        fetch('https://assignment-11-server-gold-omega.vercel.app/feature')
           .then(res => res.json())
           .then(data => setFeature(data))
    },[])

    return (
        <div className="mt-4 space-y-5">
            <div className="text-center">
                <h3 className="text-6xl font-bold text-orange-600">Feature Section</h3>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                
                {
                    features.map(feature => <FeatureCard
                     key={feature._id}
                     feature={feature}
                    ></FeatureCard> )
                }
            </div>
            
        </div>
    );
};

export default Feature;