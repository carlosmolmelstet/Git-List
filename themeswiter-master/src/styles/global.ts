import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${props => props.theme.colors.backgroundHome};
        color:  ${props => props.theme.colors.text};
        font-family: 'Kanit', sans-serif;   
    }

    body, input, textarea, button{
        font-family: 'Kanit', sans-serif;  
        outline: none;
    }

    a {
        text-decoration: none;
    }
    

`;
