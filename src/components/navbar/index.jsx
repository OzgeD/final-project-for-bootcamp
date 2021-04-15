import React from "react";
import styled from "styled-components";
import { BrandLogo } from "../brandLogo";
import { Button } from "../button";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
    align-items: center;
    display: flex;
    height: 65px;
    justify-content: space-between;
    padding: 0 1.5em;
    width: 100%;

    background-color: ${({ useTransparent }) =>
        useTransparent ? "transparent" : "#264653"};

`;

const AccessibilityContainer = styled.div `
    align-items: center;
    display: flex;
    height: 100%;
`; 

const AnchorLink = styled(Link) `
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    outline: none;
    text-decoration: none;
    transition: all 200ms ease-in-out;

    &:hover {
        filter: contrast(0.6);
    }

`;

const Seperator = styled.div `
    background-color: #fff;
    min-height: 35%;
    width: 1px;
`;

export function Navbar(props) {
    const { useTransparent } = props;

    return (
        <NavbarContainer useTransparent={ useTransparent } >
            <BrandLogo />
            <AccessibilityContainer>
                <AnchorLink>Specialists Portal</AnchorLink>
                <Marginer direction="horizontal" margin={ 10 }/>
                <Seperator />
                <Marginer direction="horizontal" margin={ 10 }/>
                <Link to="/customer/access?action=signup">
                    <Button size = { 11 }>Register</Button>
                </Link>
                <Marginer direction="horizontal" margin={ 8 }/>
                <AnchorLink to="/customer/access/signin">Login</AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    );
}