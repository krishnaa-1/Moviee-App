import React, { useState } from "react";
import "./MovieCard.css";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import Navbar from "./Navbar";

const MovieList = () => {
    const [cartCount, setCartCount] = useState(0);
    const [favouriteCount, setFavouriteCount] = useState(0);

    const handleAddtoCart = () => {
        setCartCount(cartCount + 1);
        console.log("count ki value " , cartCount);
    };

    const handleAddtoFavourites = () => {
        setFavouriteCount(favouriteCount + 1);
    };

    return (
        <div className="movie-list">
            <Navbar cartCount={cartCount} favouriteCount={favouriteCount}/>
            <MovieCard
                title="Sholay"
                description="A great movie"
                genre="Action"
                price="400"
                imageUrl="https://play-lh.googleusercontent.com/MwXYjx1UgtGu5httkCai0wTMie52LaBjwJD9jXcZrLIlp-vPo9Ly40tSX3BGwcZzsyJn2cY68Z0VebRT1w"
                onAddtoCart={handleAddtoCart}
                onAddtoFavourites={handleAddtoFavourites}
            />
            <MovieCard
                title="Avengers"
                description="A great movie"
                genre="Action"
                price="400"
                imageUrl="https://play-lh.googleusercontent.com/MwXYjx1UgtGu5httkCai0wTMie52LaBjwJD9jXcZrLIlp-vPo9Ly40tSX3BGwcZzsyJn2cY68Z0VebRT1w"
                onAddtoCart={handleAddtoCart}
                onAddtoFavourites={handleAddtoFavourites}
            />
            <MovieCard
                title="Pushpa"
                description="A great movie"
                genre="Action"
                price="400"
                imageUrl="https://play-lh.googleusercontent.com/MwXYjx1UgtGu5httkCai0wTMie52LaBjwJD9jXcZrLIlp-vPo9Ly40tSX3BGwcZzsyJn2cY68Z0VebRT1w"
                onAddtoCart={handleAddtoCart}
                onAddtoFavourites={handleAddtoFavourites}
            />
            <MovieCard
                title="Ra One"
                description="A great movie"
                genre="Action"
                price="400"
                imageUrl="https://play-lh.googleusercontent.com/MwXYjx1UgtGu5httkCai0wTMie52LaBjwJD9jXcZrLIlp-vPo9Ly40tSX3BGwcZzsyJn2cY68Z0VebRT1w"
                onAddtoCart={handleAddtoCart}
                onAddtoFavourites={handleAddtoFavourites}
            />
        </div>
    );
};

export default MovieList;
