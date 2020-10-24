import styled from 'styled-components';

export const Container = styled.div`
    background:  ${props => props.theme.colors.banner};
    color: #fff;
    height: 75px;
    display: flex;
    padding: 5px 10vw;
    align-items: center;
    justify-content: space-between;

    Switch{
        float: right;
    }

    .divlogo {
        margin-top: 10px;
        img {
            width: 60px;
        }
    }
`;
