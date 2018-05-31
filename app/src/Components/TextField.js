import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import styled, {css} from "styled-components"

const StyledTextField = css `
background:none;
border:0;
color: rgba(0, 0, 0, 0.87);
display: inline-flex;
font-size: 1rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
line-height: 1.1875em;
margin: 0;
padding: 0.5rem ;
min-width: 0;
flex-grow: 1;
box-sizing: content-box;
background: none;
vertical-align: middle;
-webkit-tap-highlight-color: transparent;
transition: border-bottom-color 200ms ease-in 0ms;
::placeholder{
opacity:0;
}

&:focus::-webkit-input-placeholder {
   opacity:1;
 }

&:focus	{
  outline:none;

}
`
const Container = styled.div `
*::before, *::after {
  box-sizing: border-box;
}

display: inline-flex;
padding: 0;
position: relative;
min-width: 0;
flex-direction: column;
align-items:center;
margin-top: 1rem;
margin-right: 1rem;


::before {
    left: 0;
    color: transparent;
    right: 0;
    bottom: 0;
    content: "testest";
    position: absolute;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    pointer-events: none;
}

::after {
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    transform: scaleX(0);
    transition: transform 200ms ease-in 0ms;
    // pointer-events: none;
    border-bottom: 2px solid #1976d2;

}

input:focus ~ label, input:valid ~ label,textarea:focus ~ label,
textarea:valid ~ label, select:valid ~ label{
    transform: translate(-0rem, -1rem) scale(0.8);
    color:#5264AE;
}

&:focus-within::after{
    transform: scaleX(1);
    color:#5264AE;
}

.dropdown-content {
  position: absolute;
  transition: transform 200ms ease-in-out;
  transform:scale(0);
}

 &:focus-within .dropdown-content {
  transform:scale(1);
  background-color: #f1f1f1;
  top:0rem;
  width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

 option, span{
         color: black;
         padding: 12px 16px;
         text-decoration: none;
         display: block;
         cursor:pointer;
     }

 option:hover,span:hover {
       background-color: #ddd
     }

}

input:valid .dropdown-content{
  transform:scale(1);
}

[tabIndex="-1"]:focus {
    outline: none;
}

@media (max-width: 660px) {

}

`;

const Label = styled.label `
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-size: 1rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.1875em;
  top: 0;
  left: 0;
  position: absolute;
  transform: translate(0, 0.5rem) scale(1);
  transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1);
  opacity:0.5;
  pointer-events:none;

@media (max-width: 660px) {

}
`;

const Input = styled.input `
${StyledTextField}




@media (max-width: 660px) {

}
`;
const Textarea = styled.textarea `
${StyledTextField}
overflow: auto;
max-height: 5rem;
max-width: 15rem;
white-space: pre-wrap;

@media (max-width: 660px) {

}
`;

const SVG = styled.svg `
  fill: currentColor;
  width: 1em;
  height: 1em;
  font-size: 24px;
  user-select: none;
  display:inline-block;
  flex-shrink: 0;
  color: inherit;
  pointer-events: none;
  position: absolute;
  right:0;
  bottom:5px;
`;

const Select = styled.select `
background:none;
border:0;
color: rgba(0, 0, 0, 0.87);
display: inline-flex;
font-size: 1rem;
font-family: "Roboto", "Helvetica", "Arial", sans-serif;
line-height: 1.1875em;
flex-grow: 1;
box-sizing: content-box;
vertical-align: middle;
-webkit-tap-highlight-color: transparent;
transition: border-bottom-color 200ms ease-in 0ms;
width:100%;
&:focus	{
  outline:none;
}

`;

const SelectBox = styled.div `

${StyledTextField}
min-width:5rem;
width:100%;
select {
 appearance: none;
}
@media (max-width: 660px) {

}
`;

const InputField = ({type, label, id, name, placeholder}) => (<Fragment>
  <Input id={id} type={type} name={name} placeholder={placeholder} required="required"/>
  <Label id={id} className="test">{label}</Label>
</Fragment>);

const TextAreaField = ({
  type,
  label,
  id,
  name,
  placeholder,
  rows
}) => (<Fragment>
  <Textarea id={id} type={type} name={name} placeholder={placeholder} rows={rows} required="required"/>
    <Label id={id} className="test">{label}</Label>
  </Fragment>);

const SelectField = ({
  type,
  label,
  id,
  name,
  placeholder,
  children,
  value,
  onChange,
  isOpen,
  iconToggle
}) => (<Fragment>
  <SelectBox>
  <Select id={id} name={name} onChange={onChange} required>
  {children}
  </Select>
  <Label id={id}>{label}</Label>
  <SVG>
    <path d="M7 10l5 5 5-5z"></path>
  </SVG>
  </SelectBox>
</Fragment>);

class TextField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      SelectValue:""
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({SelectValue:e.target.value})
  }


  render() {
    const {
      type,
      label,
      id,
      name,
      placeholder,
      multiline,
      rows,
      select,
      children,
      onChange
    } = this.props;
    const { SelectValue }= this.state;

    return (<Container id={id} value={SelectValue}>
      {type && <InputField type={type} label={label} id={id} name={name} placeholder={placeholder}/>}
      
      {multiline && <TextAreaField type={type} label={label} id={id} name={name} placeholder={placeholder} rows={rows}/>}

      {select && <SelectField type={type} label={label} id={id} name={name} placeholder={placeholder} rows={rows} children={children} onChange={onChange} value={SelectValue} />}

    </Container>)
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(TextField);
