import React from 'react';

import CardRecomendacion from './CardRecomendacion';
import { CardsContainer } from './CardsRecomendacionStyled';

import { recommended } from "../../data/Recommended"

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={recommended.length}>
      {recommended.map((recomendado) => {
        return <CardRecomendacion
          {...recomendado}
          key={recomendado.id}
        />
      })}
      {/* <CardRecomendacion />
      <CardRecomendacion />
      <CardRecomendacion />
      <CardRecomendacion /> */}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
