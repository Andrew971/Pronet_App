import styled from "styled-components";

export default styled.div`

background-color: #fefefe;
margin : 10vh auto;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
display:flex;
flex-flow: column;
width:50vh; /* Could be more or less, depending on screen size */
height:auto;
padding: 1rem;
@media (min-width: 660px) {
  padding: 2rem 5rem;
  width: 80%; /* Could be more or less, depending on screen size */

}
  `;
