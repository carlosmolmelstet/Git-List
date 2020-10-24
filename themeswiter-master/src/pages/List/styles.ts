import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100vw;
    height: 100%;

    display: flex;
    justify-content: center;
    background:  ${props => props.theme.colors.background};
    
    

`;

export const Wrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;

    
`;


export const Profile = styled.div`
    background:  ${props => props.theme.colors.card};
    width: 100%;

    border-radius: 50px;
    padding: 50px;

    box-shadow: 10px 8px 20px rgba(0, 0, 0, 0.25);

    .descriptionSmall {
        display: none;
    }

    .description {
        display: flex;
        align-items: top;

        .names {
            margin-left: 20px;
            h1 {
                color:  ${props => props.theme.colors.text};
                font-weight: normal;
                font-size: 55px;
            }

            span {
                color:  ${props => props.theme.colors.textLight};
                font-weight: 300;
                font-size: 25px;
            }

            p {
                color:  ${props => props.theme.colors.text};
                font-weight: 300;
                font-size: 30px;
            }
        }
    }

    .infos {
        .infoItem {
            display: flex;
            align-items: center;

            margin-top:20px;
            
            color:  ${props => props.theme.colors.textLight};
            font-weight: 300;
            font-size: 20px;
            img {
                margin-right: 10px;
            }
        }
        .infoItem:hover {
            color:  #EF233C;     
            cursor: pointer; 
        }
    }

    .footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 24px;

        font-weight: 300;
        font-size: 20px;

        .followers {
            display: flex;
            align-items: center;

            .followersItem {
                display: flex;
                 align-items: center;
                img {
                    margin-right: 10px;

                    :last-child {
                        margin-left: 15px;
                    }
                }
            }
        }

        .btn {
            button {
                display: flex;
                justify-content: center;
                align-items: center;

                height: 50px;
                padding: 0 20px;

                background: #EF233C;
                border: none;
                border-radius: 20px;

                color: #FFF;
                font-size: 16px;
                font-weight: 500;

                transition: background-color 0.2s;
            }
            button:hover {
                background: #C90019;
                cursor: pointer;
            }

        }
    }
    
    @media(max-width: 700px) { 
        border-radius: 30px;

        .description {
            display: block;
            text-align: center;


        .photo {
            img { 
                width: 100%;
                max-width: 250px;
                min-width: 150px;
            }
        }

        .names {
            margin-left: 20px;
            h1 {
                font-size: 30px;
            }

            span {
                color:  ${props => props.theme.colors.textLight};
                font-weight: 300;
                font-size: 25px;
            }

            p {
                font-size: 20px;

            }
        }
      }

      .infos {
        .infoItem {
            display: flex;
            align-items: center;


            margin-top:20px;
            
            color:  ${props => props.theme.colors.textLight};
            font-weight: 300;
            font-size: 16px;
            img {
                margin-right: 10px;
            }
        }
        .infoItem:hover {
            color:  #EF233C;     
            cursor: pointer; 
        }
    }
    
      .footer {
        display: block;


        .followers {
            display: block;
            
            .followersItem {
                margin-top: 20px;

                img {
                    margin-right: 10px;
                    :last-child {
                        margin-left: 0px;
                    }
                }
            }
        }

        .btn {
            margin-top: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
            button {
                display: flex;
                justify-content: center;
                align-items: center;

                height: 50px;
                padding: 0 20px;

                background: #EF233C;
                border: none;
                border-radius: 20px;

                color: #FFF;
                font-size: 16px;
                font-weight: 500;

                transition: background-color 0.2s;
            }
            button:hover {
                background: #C90019;
                cursor: pointer;
            }

        }
    }

    }

    @media(max-width: 500px) {
        .description {
            display: block;
        .names {
            h1 {
                font-size: 20px;
            }

            span {
                color:  ${props => props.theme.colors.textLight};
                font-weight: 300;
                font-size: 15px;
            }

            p {
            }
        }
      }

    }

    
`;

export const Repo = styled.div`
    margin-top: 30px;
    background:  ${props => props.theme.colors.card};
    width: 100%;
    border-radius: 50px;
    padding: 50px;
    text-align: center;
    box-shadow: 10px 8px 20px rgba(0, 0, 0, 0.25);


    h3 {
        color:  ${props => props.theme.colors.text};
        font-weight: 600;
        font-size: 55px;
        text-transform: uppercase;   
    } 

    p {
        color:  ${props => props.theme.colors.text};
        font-weight: 300;
        font-size: 35px;
        text-transform: uppercase;   

    }

    .footerRepo {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 24px;

        font-weight: 300;
        font-size: 20px;

        .stars {
            display: flex;
            align-items: center;
            img {
                margin-right: 10px;
            }
        }

        .btn {
            button {
                display: flex;
                justify-content: center;
                align-items: center;

                height: 50px;
                padding: 0 20px;

                background: #EF233C;
                border: none;
                border-radius: 20px;


                transition: background-color 0.2s;

                p {
                    color: #FFF;
                    font-size: 16px;
                    font-weight: 500;
                }
            }
            button:hover {
                background: #C90019;
                cursor: pointer;
            }

        }
    }
    
    @media(max-width: 500px) { 
        border-radius: 25px;

        p {
        font-size: 20px;
    }

        .footerRepo {
            display: block;

            .stars {
                justify-content: center;
                margin-bottom: 20px;
            }

            .btn {
                display: flex;
                justify-content: center;
                align-items: center;
             }
        }
    }
    
`;

