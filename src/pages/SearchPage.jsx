import { useDocumentTitle } from '@uidotdev/usehooks';
import CategoryCards from '../features/Categories/CategoryCards';
import styled from 'styled-components';



const H1 = styled.h1`
  padding-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

`;
function SearchPage() {
  useDocumentTitle('Spotify(Demo) - Search');

  
  return (
    <>
      <H1>Browse All</H1>
      <CategoryCards />
    </>
  );
}

export default SearchPage;
