import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

import Button from '../UI/Button/Button';

import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {selectCategory} from "../../redux/categories/categoriesSlice"

const Hero = ({ doScroll }) => {

  const dispatch = useDispatch()
  const [value, setValue] = useState("")

  const listofCategories = useSelector(state => state.categories.categories).map((category) => {
    return category.category
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newCategory = value.trim().toLowerCase().split(" ").join("")
    const categoriaSelecionado = listofCategories.find((category) => {
      return category.toLowerCase() === newCategory
    })

    if (categoriaSelecionado) {
      console.log(categoriaSelecionado)
      dispatch(selectCategory(categoriaSelecionado))
      doScroll()
    } else {
      return alert("Categoria no encontrada.")
    }

    setValue("")
  }

  return (
    <HeroContainerStyled>
      <div>
        <h1 className='title'>¿Qué categoría estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled
            type='text'
            placeholder='Ej. Pizzas a la piedra'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button
            onClick={(e) => handleSubmit(e)}
            radius='10'
            disabled={!value}>
            Buscar
          </Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
