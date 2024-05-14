import { useContext } from "react";
import { GrUpdate } from "react-icons/gr";
import { MdPreview } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProviders";
import { Link } from "react-router-dom";


const List = ({data,newList,setNewList}) => {

     const{user} = useContext(AuthContext);

    const {_id,title,level,mark,email} = data;

    
    const handleDelete = _id =>{
      console.log(_id);
     if(user.email === email){

       //sweet alert
       Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            fetch(`https://assignment-11-server-eta-ashy.vercel.app/assignment/${_id}`,{
                method: 'delete'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Assignment has been deleted.",
                        icon: "success"
                     });

                      const remaining = newList.filter( list => list._id !== _id );
                      setNewList(remaining);
                }
            })

        
        }
      });

     }

     else{
      Swal.fire({
        title: "Not deleted!",
        text: "The assignment is not yours",
        icon: "error"
     });
     }

    }




    return (
        <div className="card card-side bg-base-100 shadow-xl">
        
        <div className=" flex justify-between w-full pl-5 pr-5 mt-3 mb-2">
          <div>
                  <h2 className="card-title">Title: {title}</h2>
                   <p>Mark: {mark}</p>
                   <p>Difficulty_Level: {level}</p>
          </div>
      
          <div className="card-actions justify-end">
             <div className="join join-vertical space-y-4">
                 {/* <Link to={`/update/${_id}`}> */}
                 {/* <button className="btn ">Update</button> */}
                 {/* </Link> */}
                 
                 {/* <button className="btn bg-orange-500">Delete</button> */}

                {/* <button className="btn bg-blue-400 ">View</button> */}

                 <Link to={`/update/${_id}`}>
                       <GrUpdate></GrUpdate>
                 </Link>

                 <MdDeleteForever  onClick={() => handleDelete(_id)} ></MdDeleteForever>

                 <Link to={`/view/${_id}`}>
                      <MdPreview></MdPreview>
                 </Link>
             </div>
          </div>
      
        </div>
      </div>
    );
};

export default List;