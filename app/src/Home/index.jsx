import React from 'react';
import TextField from '../Components/TextField';
import Button from '../Components/Button';



class Home extends React.Component {


handleChange=(e)=>{
console.log(e.target.files);
}

  render() {
    return (
      <div>
      home
      <TextField id="test" label="textarea" rows="1" placeholder="with Place holder" multiline/>
      <TextField id="test1" label="testing"  type="text" placeholder="text"/>
    <TextField id="test1" label="select" placeholder="textarea" onChange={this.handleChange} select>
        <option value="4">test1</option>
      <option value="2">test2</option>
      </TextField>
      <br />
    <Button size="1.5rem" outlined>test</Button>
    <Button size="1.5rem" outlined raised>test</Button>
  <Button size="1.4rem" primary>test</Button>
<Button size="1.4rem" primary raised>test</Button>
<Button size="1.3rem" primary rounded>test</Button>
<Button size="1.2rem" raise>test</Button>
<Button size="1.2rem" rounded>test</Button>
<Button size="1.2rem" rounded raised>test</Button>
<Button size="1rem">test</Button>
<br />
<input id="test1" label="testing"  type="file" placeholder="text" onChange={e=> this.handleChange(e)}/>

      </div>
    );
  }
}

export default Home;
