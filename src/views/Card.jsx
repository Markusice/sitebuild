import React, { useContext } from "react";
import sorozatok from "../domain/sorozatok";

const getCardData = (title) => {
  return sorozatok.find((e) => e.cim === title);
};

const Card = ({ imgSrc, title, description, setModalOpen, setOpenedCard }) => {
  const onCardClicked = () => {
    const cardData = getCardData(title);

    setOpenedCard({
      title: cardData.cim,
      imgSrc: cardData.kep,
      description: cardData.leiras,
      imdbRating: cardData.imdb,
      numberOfSeasons: cardData.evadok,
    });

    setModalOpen(true);
  };

  return (
    <div onClick={onCardClicked}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={imgSrc}
          alt="Netflix Sorozat"
          className="w-full h-40 object-cover"
        />

        <div className="p-4 line-clamp-2">
          <h2 className="text-xl font-semibold text-amber-800 mb-2">{title}</h2>
          <p className="text-amber-700 line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
