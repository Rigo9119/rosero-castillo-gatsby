import styled from "styled-components";
import { device } from '../../styles/mediaQueries';

export const StyledHeader = styled.header`
    align-items: center;
    background-color: black;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 25px 15px;
    position: fixed;
    width: 100%;

    @media ${device.tablet} {
        padding: 25px 30px;
    }

    @media ${device.laptop} {
        padding: 25px 40px;
    }
`;
