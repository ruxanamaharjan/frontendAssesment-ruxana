import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --bg: #F5F5F5;
    --white: #fff;
    --grey: #575556;
    --black: #000000;
    --link: #2A6DAE;

    --font-xs:12px;
    --font-base:14px;
    --font-md:18px;
    --font-large:21px;
    --font-xl:24px;

    --br: 6px;
    --gap: 10px;
    --gap-md: 15px;
    --gap-xl: 20px;

    --ff: Poppins, sans-serif;
   
}

h1,h2,h3,h4,h5,h6,p{
    margin:0;
    font-family:var(--ff);
}

body {
    margin:0;
    padding:0;
    font-family: var(--ff);
    background: var(--bg);
    width: 100% !important;
    overflow-y: auto !important;
}



`;
