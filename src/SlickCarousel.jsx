import React from "react";
import { list } from "./data";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";

const SlickCarousel = () => {
  return (
    <section className="slider-container">
      <Slider>
        {list.map((person) => {
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
      </Slider>
    </section>
  );
};

export default SlickCarousel;
