import "./BizCard.component.css";
import logo from "../../assets/logo512.png";

const BizCard = (props) => {
  const handleDeleteClick = () => {
    console.log("BizCard clicked", props);
    props.onDeleteCard(props.id);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.desc}</p>
          <h6 className="card-subtitle mb-2 font-bolder">{props.phone}</h6>
          <h6 className="card-subtitle mb-2">{props.address}</h6>
        </div>
        <div className="card-footer">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDeleteClick}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default BizCard;
