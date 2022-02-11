import styled from "styled-components";
import { device } from '../../styles/mediaQueries';

export const StyledSection = styled.section`
    grid-column: 1 / 5;

    @media ${device.tablet} {
        grid-column: 1 / 7;
    }

    @media ${device.laptop} {
        grid-column: 1 / 13;
    }

`;

export const Cards = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    width: 100%;

    @media ${device.laptop} {
        flex-flow: row nowrap;
    }
`;
