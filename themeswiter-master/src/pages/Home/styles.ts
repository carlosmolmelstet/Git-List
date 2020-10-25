import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 50vh;

    display: flex;
    justify-content: center;
    background:  ${props => props.theme.colors.banner};
    
    @media(max-width: 990px) {
        height:70vh;
    }

`;

export const Wrapper = styled.div`


    display: flex;
    justify-content: space-between;

    width: 1440px;

    margin-top: 75px;

    .img  {
        width: 100%;


        img {
            margin-top: 100px;
            width: 95%;
        }
    }

    .search {
        width: 100%;

        .searchbox {
            display: flex;
            justify-content: center;
            align-items: center;

            text-align: center;
            
            width: 80%;
            height: 500px;

            margin-top: 150px;
            margin-left: 10%;

            box-shadow: 7px 10px 15px rgba(0, 0, 0, 0.25);
            border-radius: 20px;
            background:  ${props => props.theme.colors.card};

            .form {
                h1 {
                    padding: 10px;
                    font-weight: 600;
                    font-size: 55px;
                    line-height: 82px;
                    color: #EF233C;
                }

                input {
                    width: 75%;
                    height: 65px;

                    border-radius: 30px;
                    border: 1px solid #EF233C;
                    padding-left: 30px;
                    font-size: 20px;
                }

                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    width: 50%;
                    height: 65px;

                    margin-top: 24px;
                    margin-left: 25%;

                    border-radius: 30px;
                    border: none;
                    background: #EF233C;
                    color: #FFF;
                    font-weight: 500;
                    font-size: 25px;
                    line-height: 45px;
                    text-transform: uppercase;

                    transition: background-color 0.2s;

                    img {
                        margin-left: 10px;
                    }
                }

                button:hover {
                    cursor: pointer;
                    background: #C90019;
                }

            }
        }

    }

    .img2 {
        display: none;
    }

    @media(max-width: 990px) {
        display: block;
        margin-top: 100px;

        .img {
            display: none;
        }

        .img2 {
            display: flex;
            justify-content: center;
            img {
                width: 80%;
            }

        }

        .search {
        width: 100%;

        .searchbox {
            margin-top: -75px;
            height: auto;
            padding: 50px 0;
            }
        }
    }

    @media(max-width: 570px) {
       
        .search {
            .searchbox {
                .form {
                    h1 {
                       font-size: 40px;
                       line-height: 40px;

                    }

                    button {
                        width: 70%;
                        margin-left: 15%;
                        font-size: 20px;
                    }
                }
             } 
        }
    }

`;

