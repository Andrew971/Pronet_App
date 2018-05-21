import styled from "styled-components";

export default styled.div`
height: 100%; /* 100% Full-height */
width: ${props=>(props.RightDrawerDisplay?"20rem":"0")};
transition: width 15.15s ease-in;
position: fixed; /* Stay in place */
z-index: 1; /* Stay on top */
top: 0; /* Stay at the top */
right: 0;
background-color: rgb(247,247,247); /* Fallback color */
overflow-x: hidden; /* Disable horizontal scroll */
padding-top: 60px; /* Place content 60px from the top */
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
color: rgba(250,250,250,1);

@media (min-width: 660px) {
}
  `;
