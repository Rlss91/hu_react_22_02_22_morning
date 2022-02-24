import BizCard from "./bizCard/BizCard.component";

const PanelCard = () => {
  let cardsArr = [
    {
      name: "kenny",
      desc: "greolki4390t8j4tijerg",
      phone: "05005050505",
      address: "hartiyun 666, Telaviv",
      id: 5434,
    },
    {
      name: "omer",
      desc: "greolki4390t8j4tijerg",
      phone: "05005050505",
      address: "hartiyun 666, Telaviv",
      id: 75576,
    },
    {
      name: "cartman",
      desc: "greolki4390t8j4tijerg",
      phone: "05005050505",
      address: "hartiyun 666, Telaviv",
      id: 854,
    },
  ];
  const renderCardsArr = (item) => {
    return (
      <BizCard
        key={item.id}
        name={item.name}
        desc={item.desc}
        phone={item.phone}
        address={item.address}
      ></BizCard>
    );
  };
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {cardsArr.map(renderCardsArr)}
    </div>
  );
};

export default PanelCard;
