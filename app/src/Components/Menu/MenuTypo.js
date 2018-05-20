import styled, { css } from 'styled-components';




const mainTypo = css`


`
const subTypo = css`


`


export default styled.div`
width: 100%;
    display: flex;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    font-size: 1.2rem;

${props=>(!props.sub?mainTypo:subTypo)}

@media (min-width: 660px) {
}
  `;
