import React from 'react';

import CardRecomendacion from './CardRecomendacion';
import { CardsContainer } from './CardsRecomendacionStyled';

// Redux
import { useSelector } from 'react-redux';


const CardsRecomendacion = () => {

  const recommended  = useSelector(state => state.recommended.recommended)
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
