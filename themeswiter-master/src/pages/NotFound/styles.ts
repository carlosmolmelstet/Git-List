import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background: ${props => props.theme.colors.banner};
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 60vh;

    .image {
        margin-top: 300px;
        margin-left: 10%;

        img {
            width: 100%;
        }
    }

    .image2 {
        display: none;
    }

    .message {
        width: 50%;
        margin-right: 10%;
        text-align: right;
        font-weight: 600;
        line-height: 100px;
        p {
            font-size: 100px;
        }
        p:last-child {
            font-size: 100px;
            text-transform: uppercase;
        }
        span {
            font-size: 200px;
            line-height: 200px;
        }
    }

    @media(max-width: 1000px) { 
        display: block;
        .image {
            display: none;
        }

        .image2 {
            margin-top: 50px;
            display: flex;
            justify-content: center;

            img {
                width: 80%;
            }
        }

        .message {
            margin-top: 50px;
            padding: 0 5%;
            text-align: center;
            width: 100%;
        }
        
    }

    @media(max-width: 525px) { 
        
        .message {
            line-height: 50px;

        p {
            font-size: 70px;
        }
        p:last-child {
            font-size: 50px;
            text-transform: uppercase;
        }
        span {
            font-size: 100px;
            line-height: 100px;
        }
      }
        
    }

`;
