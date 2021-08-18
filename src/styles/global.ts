import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html{
        height: 100%;

        body: {
            display:flex;
            flex-direction: column;
            height: 100%;
            margin: 0;

            root:{
                background: radial-gradient(#282c, #2823c3);
                color: #28c342;
                display: flex;
                font-family: sans-serif;
                height: 100%;
                justify-content: center;
                padding: 15px;
            }
        }
    }
`;
