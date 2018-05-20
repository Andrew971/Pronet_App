import styled, { css,keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const mainItem = css`

padding: 1rem 1rem 1rem 1rem;

`
const subItem = css`
padding: 1rem 1rem 1rem 3rem;
animation: 1s ${fadeIn} ease-in-out;

`


export default styled.div`
width: 100%;
min-height:5vh;
background-color: transparent;
color: rgb(52,52,52);
padding: 12px 24px;
margin: 0;
border: 0;
display: flex;
position: relative;
flex-flow: row nowrap;
box-sizing: border-box;
text-align: left;
align-items: center;
justify-content: flex-start;
vertical-align: middle;
text-decoration: none;
cursor: pointer;
outline: none;
user-select: none;
-moz-appearance: none;
-webkit-appearance: none;
-webkit-tap-highlight-color: transparent;

${props=>(!props.sub?mainItem:subItem)}

@media (min-width: 660px) {
}
  `;
