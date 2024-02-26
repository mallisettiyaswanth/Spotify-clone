import HomeMusic from '../ui/HomeMusic';
import { useQuery } from '@tanstack/react-query';
import { useDocumentTitle } from '@uidotdev/usehooks';
import styled from 'styled-components';
import { getHomeItems } from '../services/categoriesApi';

const H1 = styled.h1`
  padding-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

`;

const HomeDiv = styled.div`
  height: 100vh;
  padding-bottom:10rem;
  overflow: scroll;
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

function Home() {
  useDocumentTitle('Spotify(Demo) - Web Player: Music For everyone');

  const {data, isLoading, error} = useQuery({
    queryKey : ["homepageCategories"],
    queryFn: getHomeItems
  });
  

  if(isLoading) return <H1>Loading.......</H1>
  return <>
    <H1>Home</H1>
    <HomeDiv>
       {data?.category?.map((doc, i) => <HomeMusic CategoryName={doc} key={i} SongsList={data?.res[i]} />)}
    </HomeDiv>
  </>;
}

export default Home;
