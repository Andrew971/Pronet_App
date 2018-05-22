import styled from "styled-components";

export default styled.main`
padding:1rem;
transition: margin-left .5s;
transition: margin-right .5s;
// margin-left: ${props=>(props.left?"20rem":"0")};
// margin-right: ${props=>(props.right?"20rem":"0")};

@media (max-width: 660px) {
  margin-left: 0;
  margin-right: 0;
}
  `;
