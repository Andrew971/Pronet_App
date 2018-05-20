import styled from "styled-components";

export default styled.main`
transition: margin-left .5s;
margin-left: ${props=>(props.menuDisplay?"20rem":"0")};
padding:2rem;

@media (min-width: 660px) {
}
  `;
