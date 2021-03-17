import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button `
    background-color: #2a9d8f;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: font-size: ${({ size }) => (size ? size + "px" : "18px")};
    font-weight: 600;
    padding: 6px 1em;
    outline: none;
    transition: all 200ms ease-in-out;

    &:focus{
        outline: none;
    }

    &:hover{
        background-color: #21867a;
    }
`;

export function Button(props) {
    const { size } = props;

    return <ButtonWrapper size = { size } className = {props.className}>
        {props.children}
    </ButtonWrapper>
}