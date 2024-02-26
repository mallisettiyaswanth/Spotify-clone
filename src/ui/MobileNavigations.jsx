import { AiFillBoxPlot, AiFillHome, AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { Navlink, Text } from "./PageNav";
import { BsFilePlayFill, BsSpotify } from "react-icons/bs";
import { BiSolidPlaylist } from "react-icons/bi";

const BottomDiv = styled.div`
    position: absolute;
    bottom: 0;
    height: 6rem;
    width: 100%;
    background: linear-gradient(0deg, rgba(0,0,0,1) 39%, rgba(255,255,255,0) 100%);
    z-index: 1000;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const BottomNavigationLink = styled(Navlink)`
    height: 100%;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: .3rem;
    font-size: 2rem;
    cursor: pointer;

`

const BottomNavName = styled.h3`
    font-size: .8rem;
    color: #ffffff7e;
    font-weight:lighter;
`



const MobileNavigations = () => {
    return <BottomDiv>
        <BottomNavigationLink to="/home">
            <AiFillHome />
            <BottomNavName>Home</BottomNavName>
        </BottomNavigationLink>
        <BottomNavigationLink to="/search">
            <AiOutlineSearch />
            <BottomNavName>Search</BottomNavName>
        </BottomNavigationLink>
        <BottomNavigationLink to="/">
            <BiSolidPlaylist />
            <BottomNavName>Playlist</BottomNavName>
        </BottomNavigationLink>
        <BottomNavigationLink to="https://play.google.com/store/search?q=spotify&c=apps&hl=en_IN&gl=US">
            <BsSpotify />
            <BottomNavName>Get App</BottomNavName>
        </BottomNavigationLink>
    </BottomDiv>;
};

export default MobileNavigations;