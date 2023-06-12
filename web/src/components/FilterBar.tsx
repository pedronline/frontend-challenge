import { useFilter } from '@/hooks/useFilter';
import { FilterTypes } from '@/types/filter-types';
import { styled } from 'styled-components';

interface FilterItemProps {
  selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  gap: 40px;
  /* padding-top: 34px; */
`;
const FilterItem = styled.li<FilterItemProps>`
  font-family: inherit;
  text-transform: uppercase;

  /* &:active {
    font-weight: bold;
    border-bottom: 3px solid orange;
  } */
  font-weight: ${(props) => (props.selected ? 'bold' : '')};
  border-bottom: ${(props) => (props.selected ? '3px solid orange' : '')};
`;

export function FilterBar() {
  const { type, setType } = useFilter();

  const hamdleChangeType = (value: FilterTypes) => {
    setType(value);
  };

  return (
    <div>
      <FilterList>
        <FilterItem
          selected={type === FilterTypes.ALL}
          onClick={() => hamdleChangeType(FilterTypes.ALL)}
        >
          Todos os produtos
        </FilterItem>
        <FilterItem
          selected={type === FilterTypes.SHIRT}
          onClick={() => hamdleChangeType(FilterTypes.SHIRT)}
        >
          Camisetas
        </FilterItem>
        <FilterItem
          selected={type === FilterTypes.MUG}
          onClick={() => hamdleChangeType(FilterTypes.MUG)}
        >
          Canecas
        </FilterItem>
      </FilterList>
    </div>
  );
}
