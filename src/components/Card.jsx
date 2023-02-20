import React from "react";

const Card = ({ book }) => {
  return (
    <div>
      <div className="card">
        <img src={book.image} className="card-img-top" alt="" />
        <div className="card-body">
          <h5>{book.title}</h5>
          <p className="card-text">{book.subtitle}</p>
          <a href={book.url} target="_blank" className="text-primary">Read Me</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
