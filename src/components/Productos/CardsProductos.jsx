import CardProducto from './CardProducto';
import Button from '../UI/Button/Button';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';

// Redux
import { useSelector } from 'react-redux';
import { useState } from 'react';
// Paginado
import { INITIAL_LIMIT } from '../../utils';

const CardsProductos = () => {

  const [limit, setLimit] = useState(INITIAL_LIMIT)
  const totalProductos = useSelector((state) => state.products.totalProducts)

  let products = useSelector(state => state.products.products)
  const selectedCategory = useSelector(state => state.categories.selectedCategory)

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] }
  }

  return (
    <>
      <ProductosContainer>
        {Object.entries(products).map(([, foods]) => {
          return foods.map((product) => {
            if (limit >= product.id || selectedCategory) {
              return <CardProducto {...product} key={product.id} />
            }
            return null

          })
        })}
      </ProductosContainer>

      {!selectedCategory && (
        <ButtonContainerStyled>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit - INITIAL_LIMIT)}
            secondary='true'
            disabled={INITIAL_LIMIT === limit}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={() => setLimit(prevLimit => prevLimit + INITIAL_LIMIT)}
            disabled={totalProductos <= limit}
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
      )}

    </>
  );
};

export default CardsProductos;
