import React, { createContext, useState } from "react";
import sorozatok from "../domain/sorozatok";
import Card from "./Card";
import Modal from "./Modal";

const CardContext = createContext(null);

const CardContainer = () => {
  const [openedCard, setOpenedCard] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <CardContext.Provider value={{ openedCard, setOpenedCard }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sorozatok.map((series, idx) => (
            <Card
              key={idx}
              imgSrc={series.kep}
              title={series.cim}
              description={series.leiras}
              setModalOpen={setModalOpen}
              setOpenedCard={setOpenedCard}
            />
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          setOpen={() => setModalOpen(!isModalOpen)}
          cardContext={CardContext}
        />
      </CardContext.Provider>
    </>
  );
};

export default CardContainer;
