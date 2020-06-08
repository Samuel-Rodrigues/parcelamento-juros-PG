import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
margin: 0;
padding: 0;
height: 100%;
min-height: 900px;
background: linear-gradient(-90deg, #47D9C5, #089BB5);
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

export const Body = styled.div`
    display: flex;
    justify-content: center;
`;

export const Form = styled.form`
    justify-content: center;
    margin-top: 3px;
`;

export const DateTime = styled.div`
  justify-content: center;
  margin: 10px auto ;

  .datePiker{
    flex-direction: row;
    display: flex;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    width: 350px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
  }
`;

export const Button = styled.button`
      width: 150px;
      margin: 5px 0 0;
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
`;

export const TInput = styled.input.attrs({
  maxlength: 10,
})`
    flex-direction: row;
    display: flex;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    width: 350px;
    padding: 0 15px;
    color: #fff;
    margin: 0 0 10px;
    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
`;
