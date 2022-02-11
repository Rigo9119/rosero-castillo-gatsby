import styled from "styled-components";
import { device } from '../../styles/mediaQueries';


export const Card = styled.div`
    border: 1px solid white;
    border-radius: 4px;
    margin-bottom: 25px;
    width: 90%;

    @media ${device.tablet} {
        width: 25%;
    }
`;

export const CardImage = styled.div`
    min-height: 200px;
    background-color: black;
`;

export const Image = styled.img``;

export const CardContent = styled.div`
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    min-height: 180px;
    padding: 12px;
`;

export const CardTitle = styled.h4`
    font-size: 1.6rem;
    align-self: self-start;
`;

export const CardSubtitle = styled.h6`
    font-size: 1.2rem;
    align-self: self-start;
`;

export const CardDesc = styled.p`
    font-size: 1.2rem;
`;

