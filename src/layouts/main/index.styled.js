import styled from "styled-components";
import { device } from '../../styles/mediaQueries';


export const Container = styled.main`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 28px;
    margin: 0 28px;
    padding-top: 92px;

    @media ${device.tablet} {
        grid-template-columns: repeat(6, 1fr);
        margin: 0 38px;
        padding-top: 65px;
    }

    @media ${device.laptop} {
        grid-template-columns: repeat(12, 1fr);
        margin: 0 72px;
        padding-top: 70px;
    }

    @media ${device.desktop} {
        margin: 0 auto;
        padding-top: 70px;
    }
`;
