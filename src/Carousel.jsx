import React, { useState } from "react";
import { shortList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = () => {
  const [people, setPeople] = useState(shortList);

  return (
    <section className="slider-container">
      {people.map((person) => {
        const { id, image, name, quote, title } = person;
        return (
          <article key={id} className="slide">
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
    </section>
  );
};

export default Carousel;
