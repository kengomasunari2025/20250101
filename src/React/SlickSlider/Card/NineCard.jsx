import React from "react";
import CardsImages from "./CardsImages";

const NineImage = CardsImages.find((image) => image.id === 9);

const NineCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {NineImage ? (
          <img src={NineImage.img} alt={`Image ${NineImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル9</h5>
        <div>テキスト9</div>
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
export default NineCard;
