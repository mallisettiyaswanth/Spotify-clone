import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MusicPlayer from './MusicPlayer';

const HomeCategoryDiv = styled.div`
  height: auto; // Changed to auto to accommodate variable content height
  margin: 1rem;
  width: 100%;
  @media (max-width: 650px) {
    margin: 0;
  }
`;

const H2 = styled.h2`
  font-weight: bold;
  padding: 10px 20px;
`;

const MusicDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow-x: scroll; // Ensure horizontal scrolling
  overflow-y: hidden;
  cursor: pointer;

  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
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

const HomeMusic = ({ SongsList, CategoryName }) => {
  const required = SongsList.map((song) => {
    const artistName = song.artists[0].name;
    const imageUrl = song.images[0].url;
    const category = song.name;
    return { artistName: artistName, imageUrl, categoryName: category };
  });

  const navigate = useNavigate();

  function OnClick(name) {
    const query = name.split(' ').join('+');
    navigate(`/search/${query}`);
  }

  return (
    <HomeCategoryDiv>
      <H2>{CategoryName.slice(0, 1).toUpperCase() + CategoryName.slice(1)}</H2>
      <MusicDiv>
        {required?.map((doc, i) => (
          <MusicPlayer
            OnClick={OnClick}
            key={i}
            name={doc.categoryName}
            description={doc.artistName}
            NoMusic={true}
            imageUrl={doc.imageUrl}
          />
        ))}
      </MusicDiv>
    </HomeCategoryDiv>
  );
};

export default HomeMusic;
