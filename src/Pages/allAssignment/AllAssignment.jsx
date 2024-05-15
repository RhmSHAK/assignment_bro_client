
import { AuthContext } from "../../Provider/AuthProviders";
import List from "./List";
import { useContext, useEffect, useState } from "react";


const AllAssignment = () => {

    const {user}= useContext(AuthContext);
      const [All, setAllList] = useState([]);
      //const [loading, setLoading] = useState(true);

      //const[ newList, setNewList ]= useState(loaderArtList);

      useEffect(()=>{
            fetch('https://assignment-11-server-gold-omega.vercel.app/assignment')
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                setAllList(data);
                //setLoading(false);
            })
      },[user])


    return (
        <div className='grid md:grid-cols-2 gap-4'>
            
             {
                 All.map((data)=> 
                    <List
                     key={data._id}
                     data={data}
                     newList={All}
                     setNewList={setAllList}
                    ></List>
                )
             }

        </div>
    );
};

export default AllAssignment;