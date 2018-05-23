import styled from "styled-components";

export default styled.button`
  background: ${props => (props.primary ? props.theme.primary : 'white')};
  color: ${props => (props.primary ? props.theme.color.primary : props.theme.color.secondary)};
  font-size: 1.5rem;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: ${props => (props.primary ? `2px solid ${props.theme.primary}` :`2px solid transparent`)};
  border-radius: 50px;
  cursor:pointer;
  &:hover{
    border: ${props => (props.primary ? `2px solid ${props.theme.primary}` : `2px solid ${props.theme.color.primary}`)};
  }
  @media (max-width: 740px) {
    font-size: 1.3rem;
    margin: 0.3em;
    padding: 0.15em .5em;

  }
}
`;
