import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProviders";


const ViewDetails = () => {

    const updateCard = useLoaderData();
    console.log(updateCard);

    const {title,description,photo,level,mark,date,email} = updateCard;
      console.log(updateCard);
    const request_panding = "Pending" ;

    const {user} = useContext(AuthContext);

    const handleSubmit = event =>{
        event.preventDefault();
             const from = event.target;
             const pdf_doc = from.pdf_doc.value;
             const note = from.note.value;
             
             const submit={
                pdf_doc,
                note,
                UserEmail: user?.email,
                request_panding,

                examiner: {
                    title,
                    mark,
                    email,

                }
             }

             console.log(submit);

                                               // title, assignment status, assignment marks, your optain mark,

        //sent server 
             fetch('http://localhost:2000/submitted',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(submit)
           }) 
           .then(res => res.json())
           .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Submitted Assignment",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  from.reset();
            }
           
           })  
        
    }




    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className="w-[200px]" src={photo} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Title: {title}</h2>
    <p> <span className="font-semibold">Description:</span> {description}</p>
    <p> <span className="font-semibold">Difficulty_level:</span> {level}</p>
    <p> <span className="font-semibold">Mark:</span> {mark}</p>
    <p> <span className="font-semibold">Date:</span> {date}</p>
    <div className="card-actions justify-end">

      <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-outline btn-secondary">Take Assignment</button>

    </div>
  </div>
      
      {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" >open modal</button> */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box space-y-4">

      <form onSubmit={handleSubmit} className="space-y-4">

             <input type="text" name="pdf_doc" placeholder="Type here" className="input input-bordered w-full " />

            <textarea className="textarea textarea-success w-full" name="note" placeholder="Note"></textarea>

            <input method="dialog" className="btn btn-outline btn-success w-full" type="submit" value="submit" />
      </form>

    <div className="modal-action">
      <form  method="dialog">
        {/* if there is a button in form, it will close the modal */}

        

        <button className="btn btn-outline btn-accent ">Close</button>

      </form>
    </div>
  </div>
</dialog>

</div>
    );
};

export default ViewDetails;