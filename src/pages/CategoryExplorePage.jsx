import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { searchItems } from '../services/categoriesApi';
import MusicPlayer from '../ui/MusicPlayer';
import SearchButtonGroup from '../ui/SearchButtonGroup';

const PlayerDiv = styled.div`
  overflow: scroll;
  width: 100%;
  position: relative;
  height: 100%;
  padding-bottom: 10rem;

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

const H1 = styled.h1`
  padding-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

function CategoryExplorePage() {
  const params = useParams();
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await searchItems(params.q);
      const songItems = data.tracks?.items
        .map((track) => {
          return {
            songUrl: track?.preview_url?.split('/')?.at(-1),
            imageUrl: track.album.images[0].url,
            name: track.name
          };
        })
        .filter((track) => track.songUrl && track.imageUrl);
      setSongs(songItems);
    }
    fetchData();
  }, [params]);

  return (
    <>
      <SearchButtonGroup />
      <H1>Top results</H1>
      <PlayerDiv>
        {songs &&
          songs.map((song, i) => {
            const url = `https://p.scdn.co/mp3-preview/${song.songUrl}`;
            return <MusicPlayer key={i} songUrl={url} imageUrl={song.imageUrl} name={song.name} />;
          })}
      </PlayerDiv>
    </>
  );
}

export default CategoryExplorePage;
