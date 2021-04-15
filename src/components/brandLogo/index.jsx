import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logos/logo.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div `
    align-items: center;
    display: flex;
`;

const LogoImage = styled.div `
    height: ${({ size }) => size ? size + "px" : "2em" };
    width: ${({ size }) => size ? size + "px" : "2em" };

    img{
        height: 100%;
        width: 100%;
    }
`;

const LogoTitle = styled.h2 `
    color: ${({ color }) => color ? color : "#fff" };
    font-size: ${({ size }) => size ? size + "px" : "20px" };
    font-weight: 900;
    margin: 0;
    margin-left: 6px;
`;

const StyledLink = styled(Link) `
    text-decoration: none; 
`;

export function BrandLogo(props) {
    const { logoSize, textSize, color, hideLogo } = props;

    return (  
        <BrandLogoContainer>
            {!hideLogo && (
                <Link to="/">
                    <LogoImage size= {logoSize}>
                        <img src={LogoImg} alt="Servycing Logo" />
                    </LogoImage>
                </Link>
            )}
            <StyledLink to="/">
                <LogoTitle size= {textSize} color={color} >Servycing</LogoTitle>
            </StyledLink>
        </BrandLogoContainer>
    );
  
}