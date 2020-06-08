import styled from 'styled-components'

export const Container = styled.div`
background: #fff;
padding: 0 30;
`;

export const Content = styled.div`
height: 64px;
max-width: 900px;
margin: 0 auto;
display: flex;
align-items: center;
justify-self: center;
  nav {
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
      a {
        font-weight: bold;
        color: #7159c1;
        font-size: 16px;
      }
  }

  div {
  height: 40px;
  color: #999;
  border-left: 2px solid;
}`;

