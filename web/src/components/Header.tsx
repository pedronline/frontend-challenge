'use client';

import { styled } from 'styled-components';

import { ShoppingBagOpen, MagnifyingGlass } from '@phosphor-icons/react';

import { Saira_Stencil_One } from 'next/font/google';
import { CartControl } from './CartControl';

const font = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
});

const HeaderContainer = styled.header`
  height: 120px;
  @media screen and (min-width: 537px) {
    height: 80px;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding: 0 0.5rem;
  @media screen and (min-width: 768px) {
    padding: 0 5rem;
  }

  #logo {
    font-size: 40px;
    font-weight: 400;
    line-height: 60px;
    color: #5d5d6d;
  }

  input {
    width: 16rem;
    font-size: 14px;
    @media screen and (min-width: 768px) {
      width: 20rem;
      font-size: 18px;
    }
    height: 2.5rem;
    background: #f3f5f6;
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
  }

  .cartControl {
    display: flex;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <div id="logo" className={font.className}>
        Capputeeno
      </div>
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Procurando por algo especifico?"
        ></input>
        <div className="relative right-7">
          <MagnifyingGlass size="26" />
        </div>
        <CartControl />
      </div>
    </HeaderContainer>
  );
}
