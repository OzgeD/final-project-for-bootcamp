import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
import { MutedLink } from "./common";

const BoxContainer = styled.div`
    background-color: #fff;
    border-radius: 19px;
    box-shadow: 0 0 2.7px rgba(15, 15, 15, 0.28);
    display: flex;
    flex-direction: column;
    min-height: 550px;
    overflow: hidden;
    position: relative;
    width: 280px;
`;

const TopContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    height: 255px;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
    width: 100%;
`;

const BackDrop = styled(motion.div)`
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
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    height: 550px;
    left: -70px;
    position: absolute;
    top: -290px;
    transform: rotate(60deg);
    width: 160%;
`;

const HeaderContainer = styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const HeaderText = styled.h2`
    color: #fff;
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    margin: 0;
    z-index: 10;
`;

const SmallText = styled.h5`
    color: #fff;
    font-size: 11px;
    font-weight: 500;
    margin: 0;
    margin-top: 7px;
    z-index: 10;
`;

const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
    width: 100%;
`;

const backdropVariants = {
    expanded: {
        borderRadius: "20%",
        height: "1050px",
        transform: "rotate(60deg)",
        width: "233%",
    },
    collapsed: {
        borderRadius: "50%",
        height: "550px",
        transform: "rotate(60deg)",
        width: "160%",
    },
};

const expandingTransition = {
    duration: 2.3,
    stiffness: 30,
    type: "spring",
};

export function AccountBox(props) {
    const { initialActive } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState(
        initialActive ? initialActive : "signin"
    );

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
          setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchActive = (active) => {
        setTimeout(() => setActive(active), 400);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        switchActive("signup");
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        switchActive("signin");
    };

    const contextValue = {
        switchToSignup,
        switchToSignin
    };
    
    return(
        <AccountContext.Provider value={contextValue}>
            <BoxContainer>
                <TopContainer>
                    <BackDrop
                        animate={isExpanded ? "expanded" : "collapsed"}
                        initial={false}
                        transition={expandingTransition}
                        variants={backdropVariants}
                    />
                    {active === "signin" && (
                        <>
                            <HeaderContainer>
                                <HeaderText>Welcome</HeaderText>
                                <HeaderText>Back</HeaderText>
                            </HeaderContainer>
                            <SmallText>Please sign-in to continue!</SmallText>
                        </>
                    )}
                    {active === "signup" && (
                        <>
                            <HeaderContainer>
                                <HeaderText>Create </HeaderText>
                                <HeaderText>Account</HeaderText>
                            </HeaderContainer>
                            <SmallText>Please sign-up to continue!</SmallText>
                        </>
                    )}
                </TopContainer>
                <InnerContainer>
                    {active === "signin" && <LoginForm />}
                    {active === "signup" && <SignupForm />}
                </InnerContainer>
            </BoxContainer>
        </AccountContext.Provider>
    );
}