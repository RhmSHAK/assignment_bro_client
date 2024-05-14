import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Loader from "../Loader/Loader"
import Submit from "./Submit";


const MySubmitted = () => {

    const [loading, setLoading] = useState(true);

    const [datas, setData] = useState([]);
    //console.log(datas);

    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`https://assignment-11-server-eta-ashy.vercel.app/submitted/${user?.email}`)
           .then(res => res.json())
           .then(data => {
            setData(data)
            setLoading(false);
        } )
    },[user])

    if(loading){
        return <Loader></Loader>
    }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
              
              {
                datas.map(d =>
                    <Submit
                      key={d._id}
                      data={d}
                    ></Submit>

                )
              }
        </div>
    );
};

export default MySubmitted;