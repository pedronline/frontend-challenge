'use client';

import { FilterBar } from '@/components/FilterBar';
import { FilterByPriority } from '@/components/FilterByPriority';
import { ProductsList } from '@/components/productsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { styled } from 'styled-components';

const HomeContainer = styled.main`
  /* height: calc(100vh - 120px);
  @media screen and (min-width: 537px) {
    height: calc(100vh - 80px);
  } */
  background-color: #e5e5e5;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding: 0 0.5rem;
  @media screen and (min-width: 768px) {
    padding: 0 5rem;
  }
`;

export default function Home() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <HomeContainer>
        <FilterBar />
        <FilterByPriority />
        <ProductsList></ProductsList>
      </HomeContainer>
    </QueryClientProvider>
  );
}
