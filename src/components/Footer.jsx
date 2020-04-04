import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 0em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-family: sans-serif;
    font-size: 0.75em;
    font-weight: 400;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 0.5em;
    margin-bottom: 1em;

     &:hover {
        text-decoration: underline;

    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`



const Footer = () => (
    <FooterContainer>

        <FooterAuthor href="https://www.netlify.com" target="_blank">
            Hébergeur&nbsp;:&nbsp;Netlify
        </FooterAuthor>
        <FooterAuthor>
            
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
