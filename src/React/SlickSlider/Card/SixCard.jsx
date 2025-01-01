import React from "react";
import CardsImages from "./CardsImages";

const SixImage = CardsImages.find((image) => image.id === 6);

const SixCard = () => {
  return (
    <div className="card card-width d-inline-block">
      <div>
        {SixImage ? (
          <img src={SixImage.img} alt={`Image ${SixImage.id}`} />
        ) : (
          <p>Image not found</p>
        )}
      </div>
      <div className="container pt-3">
        <h5 className="fw-bold">タイトル6</h5>
        <div>テキスト6</div>
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
export default SixCard;
