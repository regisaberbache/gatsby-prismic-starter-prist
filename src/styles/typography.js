import css from '@emotion/css';
import dimensions from "styles/dimensions";

const typeStyles = css`
    h1 {
        font-family: serif;
        font-size: 3em;
        line-height: 1.2;
        letter-spacing: -0.02em;
        text-shadow: 1px 1px 0 #FFEC59, 2px 2px 0 #FFEC59, 3px 3px 0 #FFEC59, 4px 4px 0 #FFEC59, 5px 5px 0 #FFEC59;

        @media(max-width:${dimensions.maxwidthTablet}px) {
            font-size: 2.25em;
        }

        @media(max-width:${dimensions.maxwidthMobile}px) {
            font-size: 2em;
        }
    }

    h2 {
        font-family: sans-serif;
        margin-bottom: 2rem;
        font-size: 1.9em;
        line-height: 1.1;
        letter-spacing: -0.02em;
    }

    h3 {
        font-family: sans-serif;
        line-height: 1.2;
        font-size: 1.5em;
        letter-spacing: -0.02em;
    }

    h5 {
        font-family: sans-serif;
        font-family: sans-serif;
        margin-bottom: 1.45rem;
        font-weight: 500;
        line-height: 20px;
        font-size: 0.95em;
    }

    h6 {
        font-family: sans-serif;
        font-size: 0.9em;
        font-weight: 500;
        margin: 0;
    }

    p {
        font-family: sans-serif;
        line-height: 1.9;
    }

    a {
        font-family: sans-serif;
        letter-spacing: -0.02em;
        &:hover {
            cursor: pointer;
        }
    }
`

export default typeStyles;
