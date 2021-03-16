import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button `
    background-color: #2a9d8f;
    border: none;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    padding: 6px 1.3em;
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
    return <ButtonWrapper>{props.children}</ButtonWrapper>
}