'use client';

import { styled } from 'styled-components';

const HomeContainer = styled.main`
  height: calc(100vh - 120px);
  @media screen and (min-width: 537px) {
    height: calc(100vh - 80px);
  }
  background-color: #e5e5e5;

  padding: 0 0.5rem;
  @media screen and (min-width: 768px) {
    padding: 0 5rem;
  }
`;

export default function Home() {
  return <HomeContainer>Home</HomeContainer>;
}
