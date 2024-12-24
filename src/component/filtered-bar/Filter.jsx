import React from "react";

const Filter = ({ setData, data, setUpdatedData }) => {
  const Category = ["All", "Dress", "Weddings", "Men's", "Women"];
  const Color = ["All", "White", "Black", "Red", "Gold", "Blue", "Gray"];
  const prises1 = 50;
  const prises2 = 100;
  const prises3 = 150;
  const Price = [
    `All`,
    `Under $${prises1}`,
    `$${prises1} - $${prises2}`,
    `$${prises2} - $${prises3}`,
    `$${prises3} And Above`,
  ];
  const handleData = (e) => {
    let listText = e.target.childNodes[0].data;
    if (listText == "All") return setUpdatedData(data);
    const newData = data.filter((cur) => cur.occucation == listText);
    setUpdatedData(newData);
  };

  const handleColor = (e) => {
    let listColor = e.target.childNodes[0].data;
    if (listColor == "All") return setUpdatedData(data);
    const newDataWithColor = data.filter((cur) => cur.color == listColor);
    setUpdatedData(newDataWithColor);
  };

  const handlePrice = (e) => {
    let listPrice = e.target.childNodes[0].data;
    if (listPrice == "All") return setUpdatedData(data);
    const newDataPrice = data.filter((cur) => {
      if(listPrice.includes(150) && listPrice.includes("Above")) return cur.price > 150
      else if (listPrice.includes(100) && listPrice.includes(150))
        return cur.price > 100 && cur.price < 150;
      else if (listPrice.includes(50) && listPrice.includes(100))return cur.price < 100;
      else if (listPrice.includes(50) && listPrice.includes("Under")) return cur.price < 50;
    });

    setUpdatedData(newDataPrice);
  };
  return (
    <div>
      <div className="sub-main-fil">
        <h4 className="filter-t">Filters</h4>

        <div className="section-box">
          <h3>Category</h3>
          <hr />
          <ul>
            {Category.map((cur, index) => (
              <li key={index} onClick={(e) => handleData(e)}>
               {cur}
              </li>
            ))}
          </ul>
        </div>
        <div className="section-box">
          <h3>Color</h3>
          <hr />
          <ul>
            {Color.map((cur, index) => (
              <li key={index} onClick={(e) => handleColor(e)}>
                {cur}
              </li>
            ))}
          </ul>
        </div>
        <div className="section-box">
          <h3>Price</h3>
          <hr />
          <ul>
            {Price.map((cur, index) => (
              <li key={index} onClick={(e) => handlePrice(e)}>
                {cur}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
