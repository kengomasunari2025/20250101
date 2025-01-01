import React from "react";
import CardsImages from "./CardsImages";

const OneImage = CardsImages.find((image) => image.id === 1);

const OneCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {OneImage ? (
          <img src={OneImage.img} alt={`Image ${OneImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル1</h5>
        <div>テキスト1</div>
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
export default OneCard;
