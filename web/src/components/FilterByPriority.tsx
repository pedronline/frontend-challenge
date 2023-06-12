import { useFilter } from '@/hooks/useFilter';
import { PriorityTypes } from '@/types/priority-types';
import { CaretDown } from '@phosphor-icons/react';
import { useState } from 'react';
import { styled } from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  button {
    border: none;
    font-family: inherit;
    font-size: 14px;
    cursor: pointer;
  }
`;

const PriorityFilter = styled.ul`
  width: 200px;
  position: relative;
  background: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 12px 16px;
  top: 30px;
  right: 100px;
  cursor: pointer;
`;

export function FilterByPriority() {
  const [isOpen, setIsOpen] = useState(false);
  const { setPriority } = useFilter();

  const handleOpen = () => setIsOpen((prev) => !prev);

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value);
    setIsOpen(false);
  };

  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por <CaretDown />
      </button>
      {isOpen && (
        <PriorityFilter>
          <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>
            Novidades
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>
            Preço: Maior - Menor
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>
            Preço: Menor - Maior
          </li>
          <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>
            Mais Vendidos
          </li>
        </PriorityFilter>
      )}
    </FilterContainer>
  );
}
