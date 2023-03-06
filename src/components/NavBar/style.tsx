import styled from "styled-components";
import { Link } from "react-router-dom";

export const TitleStyled = styled.h1`
    font-size: 2rem;
    text-align: start;
    text-transform: uppercase;
    font-family: 'Tilt Warp', cursive;
    margin: 10px 0;
`;

export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: #1b7d98;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const ContainerStyled = styled.div`
    border-bottom: 1px solid #1b7d98;
    margin-bottom: 30px;
    padding: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    display: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        cursor: pointer;
        background-color: #7acd9656;
        border-radius: 50%;
    }
    @media (max-width: 480px) {
        display: flex;
    }
`;

export const CloseSessionContainerStyled = styled.div`
display: flex;
    @media (max-width: 480px) {
        display: none;
    }
`;
