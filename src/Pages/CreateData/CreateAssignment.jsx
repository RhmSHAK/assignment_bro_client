import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProviders";
import Swal from "sweetalert2";


const CreateAssignment = () => {
    



 const {user} = useContext(AuthContext)
            
 const handleAddArt = event => {

     event.preventDefault();
     const form = event.target;
    
     
     const title = form.item.value;
     const description = form.description.value;
     const photo = form.photo.value;
     const level = form.customization.value;
     const mark = form.mark.value;
     const date = form.date.value;
     const email = form.email.value;

     const newArt = {title,description,photo,level,mark,date,email}

     console.log(newArt);


     //send data to the server
     fetch('http://localhost:2000/assignment',{
             method: 'POST',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify(newArt)
        }) 
        .then(res => res.json())
        .then(data => {
         console.log(data);
         if(data.insertedId){
             Swal.fire({
                 title: 'success!',
                 text: 'Added Successfully',
                 icon: 'success',
                 confirmButtonText: 'Cool'
               })
               form.reset();
         }
        
        })  

     

   }


 

 return (
     <div className="bg-lime-200 p-24 ">

         {/* <h2 className="text-3xl text-center font-bold mb-6"></h2> */}

         <form onSubmit={handleAddArt}>
             
             

         {/* form Title Name row */}
         <div className="mb-7">
              <div className="form-control w-full">
                 <label className="label">
                     <span className="label-text">Title</span>
                </label>
                  <label className="input-group" >

                  <input type="text" name="item" placeholder="Title" className="input input-bordered w-full" />
                  
                  </label>
             </div>
         </div>

         {/* form short description row */}
         <div className="mb-7">
              <div className="form-control w-full">
                 <label className="label">
                     <span className="label-text">Description</span>
                </label>
                  <label className="input-group" >

                  <input type="text" name="description" placeholder="Enter Your Description" className="input input-bordered w-full" />
                  
                  </label>
             </div>
         </div>


           {/* form image row */}
           <div className="mb-7">
              <div className="form-control w-full">
                 <label className="label">
                     <span className="label-text"> Image URL</span>
                </label>
                  <label className="input-group" >

                  <input type="text" name="photo" placeholder="Image URL" className="input input-bordered w-full" />
                  
                  </label>
             </div>
         </div>
             
             
            

         {/* form  Assignment_Difficulty_Level & Mark row */}
           <div className="md:flex mb-7">
              <div className="form-control md:w-1/2">
                 <label className="label">
                     <span className="label-text">Assignment Difficulty Level </span>
                </label>
                <select name="customization" className="select select-bordered w-full ">
                      <option disabled selected> Select </option>
                        <option>Easy</option>
                         <option>Medium</option>
                         <option>Hard</option>
                 </select>
             </div>

              <div className="form-control md:w-1/2 ml-7">
                 <label className="label">
                     <span className="label-text">Mark</span>
                </label>
                <label className="input-group" >

                  <input type="text" name="mark" placeholder="Marks" className="input input-bordered w-full"  />

                 </label>
             </div>

         </div>

        

        


          {/* form userName & userEmail row */}
           
              <div className="mb-7">
              <div className="form-control w-full">
                 <label className="label">
                     <span className="label-text">Due Date</span>
                </label>
                  <label className="input-group" >

                  <input type="date" name="date"  placeholder="Enter Your User Name" className="input input-bordered w-full" />
                  
                  </label>
             </div>

              </div>


            <div className="mb-7">
              <div className="form-control w-full ">
                 <label className="label">
                     <span className="label-text">User Email</span>
                </label>
                  <label className="input-group" >

                  <input type="text" name="email" defaultValue={user.email}  placeholder="Enter Your User Name" className="input input-bordered w-full"  />

                  </label>
             </div>

              </div>
         

              

         

         
         <input type="submit" value="Add assignment" className="btn btn-block" />
     
          </form>
     
 </div>
 );
};

export default CreateAssignment;