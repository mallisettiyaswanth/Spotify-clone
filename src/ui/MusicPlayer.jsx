// @ts-nocheck
import { useEffect, useRef, useState } from 'react';
import { BsFillPauseFill, BsFillPlayFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { setMusicPlayerRef } from '../Context/UserContext';
import { usePlayerContext } from '../Context/MusicPlayerContext';

const MusicPlayerDiv = styled.div`
  height: 10rem;
  width: 10rem;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow:
    0px 1px 7px 0px rgba(0, 0, 0, 0.12),
    0px 1px 2px 0px rgba(0, 0, 0, 0.24);
  ${(props) =>
    props.$imageUrl &&
    css`
      background-image: url(${props.$imageUrl});
    `}

  @media (max-width: 650px) {
    height: 7rem;
    width: 7rem;
  }
`;

const Card = styled.div`
  height: 16rem;
  width: 11rem;
  background-color: hsl(0deg 0% 7.06%);
  padding: 12px 8px;
  margin: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  border-radius: 10px;
  gap: 10px;
  cursor: pointer;
  position: relative;
  background-color: #5c5c5c11;
  box-shadow:
    0px 3px 7px 0px rgba(0, 0, 0, 0.13),
    0px 1px 2px 0px rgba(0, 0, 0, 0.11);

  &:hover {
    background-color: #a7a7a733;
  }

  &:hover {
    & Button {
      opacity: 1;
      transform: translateY(0);
      transition:
        opacity 0.2s ease-in-out,
        transform 0.2s ease-in-out;
    }
  }

  @media (max-width: 650px) {
    height: 12rem;
    padding: 8px 4px;
    width: 9rem;
    margin: 10px 5px;
  }
`;

const Button = styled.button`
  height: 3rem;
  width: 3rem;
  border-radius: 100%;
  background-color: #84e43f;
  z-index: 100;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
  font-weight: bolder;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.07),
    0px 2px 4px 0px rgba(0, 0, 0, 0.07),
    0px 4px 8px 0px rgba(0, 0, 0, 0.07),
    0px 8px 16px 0px rgba(0, 0, 0, 0.07),
    0px 16px 32px 0px rgba(0, 0, 0, 0.07),
    0px 32px 64px 0px rgba(0, 0, 0, 0.07);
`;

const TextBox = styled.div`
  width: inherit;
  padding-left: 20px;

  & h1 {
    font-size: 1.2rem;
    font-weight: bolder;
  }

  & h3 {
    color: #ffffff9a;
    font-size: 0.7rem;
  }
`;

const MusicPlayer = ({
  songUrl,
  imageUrl,
  description = 'By Spotify',
  name,
  NoMusic = false,
  OnClick = function () {}
}) => {
  const [playState, setPlayState] = useState(true);
  const { musicPlayerRef, handleMusicPlayerRef } = usePlayerContext();

  const musicPlayer = useRef(null);

  useEffect(() => {
    musicPlayer?.current?.load();
  }, [songUrl]);

  function handlePlayState() {
    console.log(musicPlayerRef, musicPlayer);
    if (musicPlayerRef.current !== null && musicPlayerRef.current !== musicPlayer.current) {
      musicPlayerRef.current.pause();
    }
    if (musicPlayer.current) {
      if (playState) {
        musicPlayer.current.play();
      } else {
        musicPlayer.current.pause();
      }
      setPlayState(!playState);
    }
    handleMusicPlayerRef(musicPlayer.current);
  }

  return (
    <>
      {!NoMusic && (
        <audio ref={musicPlayer}>
          <source src={songUrl} type="audio/mp3" />
        </audio>
      )}
      <Card onClick={() => OnClick(name)}>
        <MusicPlayerDiv $imageUrl={imageUrl}>
          {!NoMusic && (
            <Button onClick={handlePlayState}>
              {playState ? (
                <BsFillPlayFill style={{ color: 'black', fontSize: '1.5rem' }} />
              ) : (
                <BsFillPauseFill style={{ color: 'black', fontSize: '1.2rem' }} />
              )}
            </Button>
          )}
        </MusicPlayerDiv>
        <TextBox>
          <h1>{name.split(' ').slice(0, 2).join(' ')}</h1>
          <h3>{description}</h3>
        </TextBox>
      </Card>
    </>
  );
};

export default MusicPlayer;
