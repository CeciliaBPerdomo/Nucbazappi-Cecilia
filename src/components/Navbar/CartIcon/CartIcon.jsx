import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import { LinkContainerStyled } from './../NavbarStyles';
import { useDispatch } from 'react-redux';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice';

const CartIcon = () => {

  const dispatch = useDispatch()

  return (
    <LinkContainerStyled onClick={() => dispatch(toggleHiddenCart())}>
      <FaShoppingCart />
      <span>{3}</span>
    </LinkContainerStyled>
  );
};

export default CartIcon;
