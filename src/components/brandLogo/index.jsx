import React from "react";
import styled from "styled-components";


import LogoImg from "../../images/logos/logo.png";

const BrandLogoContainer = styled.div `
    align-items: center;
    display: flex;
`;

const LogoImage = styled.div `
    height: ${({ size }) => size ? size + "px" : "4em" };
    width: ${({ size }) => size ? size + "px" : "4em" };

    img{
        height: 100%;
        width: 100%;
    }
`;

const LogoTitle = styled.h2 `
    color: #fff;
    font-size: ${({ size }) => size ? size + "px" : "35px" };
    font-weight: 900;
    margin: 0;
    margin-left: 6px;
`;

export function BrandLogo(props) {
    const { logoSize, textSize } = props;

    return (  
        <BrandLogoContainer>
            <LogoImage size= {logoSize}>
                <img src={LogoImg} alt="Servycing Logo" />
            </LogoImage>
            <LogoTitle size= {textSize}>Servycing</LogoTitle>
        </BrandLogoContainer>
    );
  
}