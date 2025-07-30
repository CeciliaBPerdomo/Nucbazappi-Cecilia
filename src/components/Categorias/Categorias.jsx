import React from 'react';

import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';

import { categories } from "../../data/Categories"

const Categorias = () => {
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
