

const Banner = () => {
    return (
        <div className="hero min-h-screen rounded-xl" style={{backgroundImage: 'url(https://i.ibb.co/0GwNwcV/create-assginement.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-6 text-5xl font-bold">Assignment </h1>
      <p className="text-xl text-red-200">Users can easily create study assignments, specifying the subject, topic, due date, and any specific instructions or resources required. <br />
      Track progress on assignments with a visual indicator showing completion status. Users can see which assignments they've completed and which are pending. <br />
      Engage in real-time group discussions related to assignments. Users can share insights, ask questions, and collaborate effectively within the platform.
      </p>
      
    </div>
  </div>
</div>
    );
};

export default Banner;