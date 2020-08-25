import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name} />
  </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}

const foodILike = [{id: 1, name: "Kimchi", image: "https://cdn.crowdpic.net/detail-thumb/thumb_d_AAA4C5E8C1E29791413BFBFF5419BA73.jpg"},
{id: 2, name: "ramen", image: "https://file.mk.co.kr/meet/neds/2017/09/image_readtop_2017_587233_15042337473013492.jpg"},
{id: 3, name: "danhobak", image: "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F99EACE455B2612C514"},
{id: 4, name: "sweetpotato", image: "https://th4.tmon.kr/thumbs/image/557/2be/997/eb10e04db_700x700_95_FIT.jpg"}];

function renderFood(dish){
  return <Food key={dish.id} name={dish.name} picture={dish.image} />
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;