import styled from "styled-components";
import { device } from '../../styles/mediaQueries';
import { NavList } from "../navBar/footerNav.styled";

export const StyledFooter = styled.footer`
    align-items: center;
    background-color: black ;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    padding: 25px 40px;
    width: 100%;

    @media ${device.laptop} {
        justify-content: space-between;
        flex-flow: row nowrap;
    }
`;

export const FooterLeft = styled.div`
    align-items: center;
    background-color: black ;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 100%;

    @media ${device.laptop} {
        width: 30%;
    }
`;

export const MediaList = styled(NavList)`
    width: 100%;
    
    @media ${device.laptop} {
        width: 30%;
    }
`;

export const MediaItem = styled.li`
    list-style: none
`;

export const MediaItemAnchor = styled.a`
`;

export const FooterRight = styled.div`
    align-items: center;
    background-color: black ;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width:  100%;

    @media ${device.laptop} {
        flex-flow: row nowrap;
        width: 26%;
    }
`;

export const CopyRight = styled.p``;

