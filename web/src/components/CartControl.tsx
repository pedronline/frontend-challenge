import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ShoppingBagOpen } from '@phosphor-icons/react';
import Link from 'next/link';
import { styled } from 'styled-components';

const CartCount = styled.div`
  background-color: #de3838;
  color: white;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 25px;
  right: 15px;
  top: 10px;
`;

export function CartControl() {
  const { value } = useLocalStorage('cart-items');

  if (value === null || typeof value === 'undefined') {
    return null;
  }

  if (typeof value !== 'object' || !Array.isArray(value)) {
    return null;
  }

  return (
    <>
      <Link href="/cart">
        <ShoppingBagOpen size="26" />
      </Link>
      {value.length && (
        <CartCount>
          <Link href="/cart">{value.length}</Link>
        </CartCount>
      )}
    </>
  );
}
