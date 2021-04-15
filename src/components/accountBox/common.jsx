import styled from "styled-components";

export const BoxContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
`;

export const FormContainer = styled.form`
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MutedLink = styled.a`
    color: rgba(170, 170, 170, 1);
    font-size: 11px;
    font-weight: 500;
    text-decoration: none;
`;

export const BoldLink = styled.a`
    color: #5963c3;
    font-size: 11px;
    font-weight: 500;
    margin: 0 4px;
    text-decoration: none;
`;

export const Input = styled.input`
    border: 1px solid rgba(200, 200, 200, 0.3);
    border-bottom: 1.4px solid transparent;
    font-size: 12px;
    height: 42px;
    outline: none;
    padding: 0px 10px;
    transition: all 200ms ease-in-out;
    width: 100%;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }
    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid #5963c3;
    }
`;

export const SubmitButton = styled.button`
    background: #8360c3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #2ebf91,
        #8360c3
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #2ebf91,
        #8360c3
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: none;
    border-radius: 100px 100px 100px 100px;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    padding: 11px 40%;
    transition: all, 240ms ease-in-out;

    &:focus {
        outline: none;
    }

    &:hover {
        filter: brightness(1.03);
    }
`;