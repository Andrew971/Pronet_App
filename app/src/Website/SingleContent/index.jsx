import React ,{Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import TextField from '../../Components/TextField';
import Button from '../../Components/Button';
import Paper from '../../Components/Paper';
import base from '../../js/firebase'

class SingleContent extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    data:null
  }
}

componentWillMount() {
  const {id} = this.props.match.params

  base.syncState(`websiteContent/${id}`, {
    context: this,
    state: 'data',
  });

}

handleChange=(e)=>{

}

  render() {
    const {data} = this.state

    return (<Fragment>
      {data && data.field.map(field=>
        <Paper key={field.id}>
        Single content:{data.name}
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

        </Paper>
      )}
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {

  return {}

}
export default(withRouter(connect(mapStateToProps)(SingleContent)));
