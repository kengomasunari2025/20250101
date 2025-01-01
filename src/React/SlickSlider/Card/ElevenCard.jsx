import React from "react";
import CardsImages from "./CardsImages";

const ElevenImage = CardsImages.find((image) => image.id === 11);

const ElevenCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {ElevenImage ? (
          <img src={ElevenImage.img} alt={`Image ${ElevenImage.id}`} />
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
export default ElevenCard;
