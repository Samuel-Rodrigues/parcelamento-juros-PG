import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
 margin-top: 4%;
`;

export const Title = styled.div`
    padding-top: 2%;
    text-align: center;

    p{
        color: #fff;
        font-weight: bold;
        font-size: 20px;
    }
`;

export const Form = styled.div`
    margin-top: 1%;
    text-align: center;
    

    input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    width: 250px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button { width: 150px;
      margin: 5px 5px 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover{
        background: ${darken(0.03, '#3b9eff')};
      }
    }
`;

export const Body = styled.div`
    padding-top: 3%;
    display: flex;
    justify-content: center;

    div{
        background-color: #eee;
        width: 600px;
    }
`;

export const TitleAccordion = styled.div`
  span{
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
  
  h3 {
    font-size: 14px;
    display: inline;
  }
  h4{
    font-size: 14px;
    display: inline;
  }


`;

