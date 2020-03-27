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

const FooterAuthor = styled("p")`
    font-size: 0.75em;
    color: ${colors.grey700};
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    margin-top: 0.5em;

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
            ©&nbsp;Régis&nbsp;Aberbache  &nbsp;&nbsp;I&nbsp;&nbsp;  Base&nbsp;:&nbsp;starter&nbsp;GatsbyJS de&nbsp;Marguerite&nbsp;Roth  &nbsp;&nbsp;I&nbsp;&nbsp;  Hébergeur&nbsp;:&nbsp;Netlify
        </FooterAuthor>
        <FooterAuthor>
            
        </FooterAuthor>
    </FooterContainer>
)

export default Footer;
