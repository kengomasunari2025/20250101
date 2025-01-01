import React from "react";
import CardsImages from "./CardsImages";

const EightImage = CardsImages.find((image) => image.id === 8);

const EightCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {EightImage ? (
          <img src={EightImage.img} alt={`Image ${EightImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル11</h5>
        <div>テキスト11</div>
      </div>
      <div className="text-center py-3">
        <a
          className="hover btn d-inline-block bg-dark outline-dark text-white px-2 py-1"
          href=""
        >
          ボタン
        </a>
      </div>
    </div>
  );
};
export default EightCard;
