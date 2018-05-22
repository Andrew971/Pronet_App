import styled, {keyframes} from "styled-components"
const shake = keyframes `
   10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;


export default styled.button `
width: 2rem;
height: 2rem;
padding: 0;
border: 0;
border-radius: 50%;
display: inline-flex;
flex: 0 0 auto;
cursor: pointer;
text-align: center;
outline: none;
position: relative;
user-select: none;
align-items: center;
vertical-align: middle;
justify-content: center;
text-decoration: none;
background-color:transparent;

-webkit-tap-highlight-color: transparent;
-webkit-appearance: none;
-moz-appearance: none;

&:active{
  ${props=> !props.primary && `animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both`}
  transform: translate3d(0, 0, 0);
}

&:hover{
  background-color: rgba(159,159,159,.52);
}

@media (max-width: 660px) {
  // margin: 0 2rem 0 0;
}
`;
