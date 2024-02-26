import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCategories } from '../../services/categoriesApi';
import CategoryCard from './CategoryCard';

const Cards = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  overflow: scroll;
  padding-bottom: 10rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 100px;
}

&::-webkit-scrollbar-thumb {
  background-color: #dadada44;
  border-radius: 100px;
}
`;

function CategoryCards() {
  const { data: items, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories
  });

  if (error) return null;
  return (
    <Cards>
      {items?.map((item) => (
        <CategoryCard key={item.catId} item={item} />
      ))}
    </Cards>
  );
}

export default CategoryCards;
