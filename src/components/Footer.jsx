import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";

const FooterContainer = styled("div")`
    padding-top: 3.75em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;

    svg {
        max-width: 50px;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 1.5em;

     &:hover {
         color: ${colors.grey700};

    }

    @keyframes rotate {
        from {transform: rotate(0deg);}
        to {transform: rotate(360deg);}
    }
`


const Footer = () => (
    <FooterContainer>
        <FooterAuthor>
            © Régis Aberbache
            Base : starter GatsbyJS de <a href="https://marguerite.io" style="text-decoration: none;" target="_blank">Marguerite Roth</a>
            Hébergeur : <a href="https://www.netlify.com" style="text-decoration: none;" target="_blank">Netlify</a>
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
