import styled from "styled-components";

export default styled.div`
position:absolute;
z-index: 1; /* Sit on top */
left: 0;
top: 0;
width: 100%; /* Full width */
height: 100vh; /* Full height */
overflow: hidden;
background-color: ${props=>(props.menuDisplay?"rgba(0,0,0,0.6)":"0")};
pointer-events: ${props=>(props.menuDisplay?"none":"auto")};

@media (min-width: 660px) {
}
  `;
