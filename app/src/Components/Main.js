import styled from "styled-components";

export default styled.main`
transition: margin-left .5s;
transition: margin-right .5s;
margin-left: ${props=>(props.left?"20rem":"0")};
margin-right: ${props=>(props.right?"20rem":"0")};
padding:2rem;

@media (min-width: 660px) {
}
  `;
