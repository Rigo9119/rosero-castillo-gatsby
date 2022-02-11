import styled from "styled-components";
import { device } from '../../styles/mediaQueries';

export const StyledSection = styled.section`
    align-items: center;
    border: 1px solid white;
    border-radius: 4px;
    display: flex;
    flex-flow: column;
    grid-column: 1 / 5;
    justify-content: space-evenly;
    height: auto;
    padding: 20px;

    @media ${device.tablet} {
        grid-column: 1 / 7;
        height: 80vh;
    }

    @media ${device.laptop} {
        grid-column: 1 / 13;
        height: 80vh;
        padding: 20px;
    }

`;

export const TeamTitle = styled.h2`
    margin-bottom: 25px;
`;

export const Cards = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    width: 100%;

    @media ${device.tablet} {
        flex-flow: row nowrap;
    }
`;
