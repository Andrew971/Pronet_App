import styled, {keyframes} from "styled-components"


const Spine = keyframes `
  100% {
    transform: rotate(360deg);
  }
}
`;
export default styled.span`
dysplay:inline-flex;
color: #aaa;
font-size: 3rem;
font-weight: bold;
position:absolute;
top:0;
right:1rem;

&:hover,
&:focus {
color: black;
text-decoration: none;
cursor: pointer;

&:hover{
  animation: ${Spine} 1s linear 1;

}
@media (min-width: 660px) {

}
  `;
