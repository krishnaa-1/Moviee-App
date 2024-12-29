import React, { Component } from "react";
import "./MovieCard.css";

class MovieCard extends Component {
  render() {
    const { title, description, imageUrl, genre, price , onAddtoFavourites , onAddtoCart } = this.props;

    return (
      <div className="movie-card">
        <img
          className="movie-card__image"
          src={imageUrl}
          alt={title}
        />
        <div className="movie-card__content">
          <h2 className="movie-card__title">{title}</h2>
          <p className="movie-card__genre">
            Genre: {genre}
          </p>
          <p className="movie-card__description">
            Description: {description}
          </p>
          <p className="movie-card__price">
            Price: ${price}
          </p>
          <div className="movie-card__actions">
            <button className="movie-card__add-to-cart" onClick={onAddtoCart}>
              Add to Cart
            </button>
            <button className="movie-card__add-to-favourites" onClick={onAddtoFavourites}>
              Add to Favourites
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
