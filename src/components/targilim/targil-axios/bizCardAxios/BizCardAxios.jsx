import { useState, useEffect } from "react";
import axios from "axios";
import "./BizCardAxios.css";
import logo from "../../../../assets/logo512.png";

const BizCardAxios = () => {
  const [cardData, setCardData] = useState({});
  const [cardID, setCardID] = useState("");
  useEffect(() => {
    const getCard = async () => {
      try {
        let data = await axios.get("/cards/card/61f2a212d052cf2f4a8ac135");
        console.log("data", data);
        setCardData(data.data);
      } catch (err) {}
    };
    getCard();
  }, []);
  const handleDeleteClick = () => {
    // console.log("BizCard clicked", props);
    // props.onDeleteCard(props.id);
  };
  const handleInputChange = (event) => {
    setCardID(event.target.value);
  };
  const handleBlur = () => {
    const getCard = async () => {
      try {
        let data = await axios.get(`/cards/card/${cardID}`);
        console.log("data", data);
        setCardData(data.data);
      } catch (err) {}
    };
    getCard();
  };
  return (
    <div className="col">
      <input
        type="text"
        onBlur={handleBlur}
        onChange={handleInputChange}
        value={cardID}
      />
      <div className="card h-100">
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{cardData.name}</h5>
          <p className="card-text">{cardData.description}</p>
          <h6 className="card-subtitle mb-2 font-bolder">{cardData.phone}</h6>
          <h6 className="card-subtitle mb-2">{cardData.address}</h6>
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

export default BizCardAxios;
