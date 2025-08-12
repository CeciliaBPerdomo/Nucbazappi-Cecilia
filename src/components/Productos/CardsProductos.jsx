import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';

// Redux
import { useSelector } from 'react-redux';


const CardsProductos = () => {

  const Products = useSelector(state => state.products.products)

  return (
    <>
      <ProductosContainer>
        {Object.entries(Products).map(([, foods]) => (
          foods.map((product) => (
            <CardProducto
              {...product}
              key={product.id}
            />
          ))
        ))}
      </ProductosContainer>

      <ButtonContainerStyled>
        <Button
          onClick={e => e.preventDefault()}
          secondary='true'
          disabled='true'
        >
          <span>Ver menos</span>
        </Button>
        <Button onClick={e => e.preventDefault()} disabled='true'>
          Ver más
        </Button>
      </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
