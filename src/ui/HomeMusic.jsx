import styled from "styled-components";
import MusicPlayer from "./MusicPlayer";
import { useNavigate } from "react-router-dom";

const HomeCategoryDiv = styled.div`
    height: 25rem;
    margin: 1rem;
    width: 100%;
    @media (max-width: 650px) {
        height: 16rem;
        margin: 0;
    }
`
const H2 = styled.h2`
    font-weight: bold;
    padding: 10px 20px;
`;

const MusicDiv = styled.div`
    height: 20rem;
    display: flex;
    align-content: center;
    justify-content: center;
    overflow-y: scroll;
    cursor: pointer;

    &::-webkit-scrollbar {
        opacity: 0;
        height: 0px
    }

     &:hover::-webkit-scrollbar {
        height: 8px;
        opacity: 1;
        display: block;
    }

     &::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: 100px;
    }

     &::-webkit-scrollbar-thumb {
        background-color: #dadada44;
        border-radius: 100px;
    }
`


const HomeMusic = ({SongsList, CategoryName}) => {
    const required = SongsList.map(song => {
        const artistName = song.artists[0].name;
        const imageUrl = song.images[0].url;
        const category = song.name;
        return {artistName: artistName, imageUrl, categoryName: category}
    })

    const navigate = useNavigate();

    function OnClick(name) {
        const query = name.split(" ").join("+");
        navigate(`/search/${query}`);
    }

    return <HomeCategoryDiv>
        <H2>{CategoryName.slice(0, 1).toUpperCase() + CategoryName.slice(1) }</H2>
        <MusicDiv>
            {required?.map((doc, i) => <MusicPlayer OnClick={OnClick} key={i} name={doc.categoryName} description={doc.artistName} NoMusic={true} imageUrl={doc.imageUrl} />)}
        </MusicDiv>
    </HomeCategoryDiv>
};

export default HomeMusic;