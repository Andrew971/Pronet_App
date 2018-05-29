import styled, {keyframes} from "styled-components"


const Spine = keyframes `
  100% {
    transform: rotate(180deg);
  }
}
`;
export default styled.span`
dysplay:inline-flex;
color: #aaa;
font-size: 3rem;
font-weight: bold;
top:0;
right:1rem;
position:fixed;
&:hover,
&:focus {
color: black;
text-decoration: none;
cursor: pointer;

&:hover{
  animation: ${Spine} 250ms ease-in 1;

}
@media (min-width: 660px) {

}
  `;
