

const Submit = ({data}) => {
    const {request_panding,examiner,obtained_mark,feedback} = data;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  
  <div className="card-body">
    <h2 className="card-title">Title: {examiner.title}</h2>
    <p>Mark: {examiner.mark}</p>
    {obtained_mark && feedback? <p>Assignment Status: <span className="text-green-600 font-medium"> Complete</span> </p>
    : <p>Assignment Status: <span className="text-red-600 font-semibold">{request_panding}</span> </p>}
    { obtained_mark && <p>Obtained Marks: {obtained_mark}</p>}
    {feedback && <p>Feedback: {feedback}</p>}
    
  </div>
</div>
    );
};

export default Submit;