import React from 'react';
import TextField from '../Components/TextField';



class Dashboard extends React.Component {


handleChange=(e)=>{

}

  render() {
    return (
      <div>
      Dashboard
      <TextField id="test" label="textarea" rows="1" placeholder="with Place holder" multiline/>
      <TextField id="test1" label="testing"  type="text" placeholder="text"/>
    <TextField id="test1" label="select" placeholder="textarea" onChange={this.handleChange} select>
        <option value="4">test1</option>
      <option value="2">test2</option>
      </TextField>
      </div>
    );
  }
}

export default Dashboard;
