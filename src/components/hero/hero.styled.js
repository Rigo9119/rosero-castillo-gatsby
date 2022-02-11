import styled from "styled-components";
import { device } from '../../styles/mediaQueries';

export const StyledHero = styled.section`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    grid-column: 1 / 5;
    height: 90vh;

    @media ${device.tablet} {
        grid-column: 1 / 7;
    }

    @media ${device.laptop} {
        grid-column: 1 / 13;
    }
`;

export const StyledHeadingOne = styled.h1`
    font-size: 3rem;
    height: max-content;
    text-align: center;

    @media ${device.laptop} {
        font-size: 3rem;
    }
`;

export const StyledDescription = styled.p`
    font-size: 1.2rem;
    height: 40%;
    letter-spacing: 2px;
    line-height: 22px;
    text-align: center;
    width: 100%;

    @media ${device.tablet} {
        width: 60%;
    }
`;
