import React, { useEffect, useState } from "react";
import { list, shortList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevPerson = () => {
    setCurrentPerson((index) => {
      return (index + 1) % people.length;
    });
  };
  const nextPerson = () => {
    setCurrentPerson((index) => {
      return (index - 1 + people.length) % people.length;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextPerson();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, quote, title } = person;
        return (
          <article
            key={id}
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)})%`,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
              opacity: personIndex === currentPerson ? 1 : 0,
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevPerson}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextPerson}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
