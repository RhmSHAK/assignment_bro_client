import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProviders";


const Pending = ({data}) => {
    const {_id,examiner,pdf_doc,note} = data;

    const {user} = useContext(AuthContext);

     const handleMark = event =>{
      event.preventDefault();
      const form = event.target;
      const obtained_mark = form.obtained_mark.value;
      const feedback = form.feedback.value;
      const request_panding = "complete";
        const mark_feedback={
          obtained_mark,feedback,request_panding
        }
       console.log(mark_feedback);

       //update
     fetch(`https://assignment-11-server-gold-omega.vercel.app/markUpdate/${_id}`,{
      method: 'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(mark_feedback)
 }) 
 .then(res => res.json())
 .then(data => {
  console.log(data);
  if(data.modifiedCount>0){

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Mark && Feedback",
      showConfirmButton: false,
      timer: 1500
    });
      form.reset();
      window.location.reload();
  }
 
 })  



     }

     


    return (
      <div className="card card-side bg-base-100 shadow-xl">
  
        <div className="card-body">
          <h2 className="card-title">Title: {examiner.title}</h2>
          <p>Mark: {examiner.mark}</p>
          <p>Examinee name: {user.displayName}</p>
          

          <div className="card-actions justify-end">
                       <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Give Mark</button>
        </div>

        </div>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box space-y-4">

      <form  onSubmit={handleMark} className="space-y-4">

             <input type="text" name="pdf_doc" defaultValue={pdf_doc} placeholder="Type here" className="input input-bordered w-full " />

            <textarea className="textarea textarea-success w-full" defaultValue={note} name="note" placeholder="Note"></textarea>

            <input type="text" name="obtained_mark"  placeholder="Obtained Mark" className="input input-bordered w-full " />

            <textarea className="textarea textarea-success w-full"  name="feedback" placeholder="Feedback"></textarea>

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

export default Pending;