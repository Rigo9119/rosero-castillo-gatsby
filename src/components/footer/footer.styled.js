import styled from "styled-components";
import { device } from '../../styles/mediaQueries';
import { NavList } from "../navBar/footerNav.styled";

export const StyledFooter = styled.footer`
    align-items: center;
    background-color: black ;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    margin-top: 12px;
    padding: 25px 40px;
    width: 100%;

    @media ${device.tablet} {
        margin-top: 20px;
        padding: 22px 30px;
    }

    @media ${device.laptop} {
        justify-content: space-between;
        flex-flow: row nowrap;
        margin-top: 40px;
        padding: 22px 40px;
    }
`;

export const FooterLeft = styled.div`
    align-items: center;
    background-color: black ;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-bottom: 20px;
    width: 100%;

    @media ${device.laptop} {
        margin-bottom: 0;
        width: 15%;
    }
`;

export const MediaList = styled(NavList)`
    width: 100%;
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

export const CopyRight = styled.p`
    margin-top: 10px;

    @media ${device.tablet} {
        margin-top: 0;
    }

    @media ${device.laptop} {
        margin-top: 0;
    }
`;

