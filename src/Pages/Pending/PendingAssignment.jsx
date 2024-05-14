import { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { AuthContext } from "../../Provider/AuthProviders";
import Pending from "./Pending";


const PendingAssignment = () => {

    const [loading, setLoading] = useState(true);

    const [pendings, setPending] = useState([]);
    console.log(pendings);

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:2000/submit/${user?.email}`)
           .then(res => res.json())
           .then(data => {
            setPending(data)
            setLoading(false);
        } )
    },[user])

    if(loading){
        return <Loader></Loader>
    }



    return (
        
        
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {
                pendings.map(p =>
                    <Pending
                       key={p._id}
                       data={p}
                    ></Pending>
                )
            }
            </div>
        
    );
};

export default PendingAssignment;