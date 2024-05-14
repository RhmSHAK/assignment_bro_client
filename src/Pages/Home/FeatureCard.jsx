

const FeatureCard = ({feature}) => {
    const {feature_title, description, image} = feature;
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title font-bold">Title: {feature_title}</h2>
    <p><span className="font-semibold text-xl">Description:</span> {description}</p>
    
  </div>
</div>
    );
};

export default FeatureCard;