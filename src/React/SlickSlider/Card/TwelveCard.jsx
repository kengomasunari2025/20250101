import React from "react";
import CardsImages from "./CardsImages";

const TwelveImage = CardsImages.find((image) => image.id === 12);

const TwelveCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {TwelveImage ? (
          <img src={TwelveImage.img} alt={`Image ${TwelveImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル12</h5>
        <div>テキスト12</div>
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
export default TwelveCard;
