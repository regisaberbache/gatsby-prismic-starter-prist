import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const ProjectCardContainer = styled(Link)`
    display: grid;
    grid-template-columns: 4fr 7fr;
    box-shadow: 20px 20px 0px rgba(255, 92, 5, 0.1);
    margin-bottom: 4em;
    transition: all 400ms ease-in-out;
    text-decoration: none;
    color: currentColor;

    @media(max-width:950px) {
        grid-template-columns: 4.5fr 7fr;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
    }

    &:hover {
        box-shadow: -20px 20px 0px rgba(5, 130, 255, 0.1);
        transition: all 150ms ease-in-out;

        .ProjectCardAction {
            color: white;
            transition: all 200ms ease-in-out;
            transform: translateX(20px);

            span {
                transform: translateX(10px);
                opacity: 1;
                transition: transform 150ms ease-in-out-back;
            }
        }

        .ProjectCardContent {
            background: ${colors.blue500};
            transition: all 150ms ease-in-out;
        }

        .ProjectCardImageContainer {
            background: ${colors.blue500};
            transition: all 150ms ease-in-out;
        }

        .ProjectCardCategory {
            color: white;
            transition: all 150ms ease-in-out;
        }
    }
`

const ProjectCardContent = styled("div")`
    background: white;
    padding: 4em 3em 2.25em 3em;
    position: relative;
    transition: all 150ms ease-in-out;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    @media(max-width:950px) {
        padding: 3.25em 2.5em 2em 2.5em;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-row: 2;
    }
`

const ProjectCardCategory = styled("h6")`
    font-weight: 400;
    color: black;
    transition: all 150ms ease-in-out;    
`

const ProjectCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    transition: all 150ms ease-in-out;
`

const ProjectCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 5em;
    transition: all 200ms ease-in-out;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }
`

const ProjectCardAction = styled("div")`
    font-weight: 600;
    text-decoration: none;
    color: currentColor;
    transition: all 400ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const ProjectCardImageContainer = styled("div")`
    background: ${colors.grey100};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-left: 2em;
    padding-right: 2em;
    transition: all 150ms ease-in-out;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        padding-top: 3em;
        max-height: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        max-width: 400px;
        width: 100%;
        -webkit-filter: drop-shadow(0px 30px 30px rgba(0,0,0,0.3));
        -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=0, OffY=30, Color='#DDD')";
        filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#DDD')";
        
        @media(max-width:${dimensions.maxwidthTablet}px) {
            max-width: 300px;
        }
    }
`

const ProjectCard = ({ category, title, description, thumbnail, uid}) => (
    <ProjectCardContainer to={`/work/${uid}`}>
        <ProjectCardContent className="ProjectCardContent">
            <ProjectCardCategory>
                {category[0].text}
            </ProjectCardCategory>
            <ProjectCardTitle>
                {title[0].text}
            </ProjectCardTitle>
            <ProjectCardBlurb>
                {RichText.render(description)}
            </ProjectCardBlurb>
            <ProjectCardAction className="ProjectCardAction">
                Voir ce projet <span>&#8594;</span>
            </ProjectCardAction>
        </ProjectCardContent>
        <ProjectCardImageContainer className="ProjectCardImageContainer">
            <img src={thumbnail.url} alt={title[0].text}/>
        </ProjectCardImageContainer>
    </ProjectCardContainer>
)

export default ProjectCard;

ProjectCard.propTypes = {
    category: PropTypes.array.isRequired,
    thumbnail: PropTypes.object.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}
