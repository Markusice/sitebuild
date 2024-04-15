import React, { useContext } from "react";
import CardContext from "../contexts/CardContext";

const Modal = ({ isOpen, setOpen }) => {
  const { openedCard } = useContext(CardContext);

  return (
    <>
      {isOpen && (
        <div
          id="modal"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2" id="modalTitle">
              {openedCard.title}
            </h2>
            <img
              src={openedCard.imgSrc}
              alt="Netflix Sorozat"
              className="w-full h-40 object-cover mb-4"
            />
            <p id="modalContent" className="text-amber-700">
              {openedCard.description}
            </p>
            <p id="imdbRating" className="text-amber-700">
              IMDb értékelés: {openedCard.imdbRating}
            </p>
            <p id="seasons" className="text-amber-700">
              Évadok száma: {openedCard.numberOfSeasons}
            </p>
            <button
              id="closeModal"
              className="mt-4 bg-amber-700 text-white py-2 px-4 rounded hover:bg-amber-600"
              onClick={() => setOpen(false)}
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
