import React from 'react';
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { IoMdTrash } from 'react-icons/io';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/cart/cartSlice';

const ModalCartCard = ({ id, title, img, desc, price, quantity }) => {

  const dispatch = useDispatch()

  return (
    <ProductContainerStyled>
      <img
        src={img}
        alt={title}
      />
      <TextContainerStyled>
        <CardTitleStyled>{title}</CardTitleStyled>
        <TextStyled>{desc}</TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>

        {/* Menos */}
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={() => dispatch(removeFromCart(id))}
        >
          {/* si es menor a uno muestra una papelera si no el menos */}
          {quantity === 1 ? <IoMdTrash /> : <FaMinus />}

        </Increase>

        {/* Cantidad */}
        <Count>{quantity}</Count>

        {/* Aumentar */}
        <Increase onClick={() => dispatch(addToCart({ id, title, img, desc, price, quantity }))}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
