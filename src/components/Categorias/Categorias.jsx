import React from 'react';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';

// Redux
import { useSelector } from 'react-redux';

const Categorias = () => {
  // redux
  const categories = useSelector(state => state.categories.categories)

  return (
    <CategoriasContainer>
      {categories.map((category) => (
        <Categoria
          {...category}
          key={category.id}
        />
      ))}

    </CategoriasContainer>
  );
};

export default Categorias;
