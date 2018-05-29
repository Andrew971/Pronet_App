import React, {PureComponent, Fragment} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ModalWrapper from "../../../Components/Modal/ModalWrapper";
import ModalContent from "../../../Components/Modal/ModalContent";
import ModalClose from "../../../Components/Modal/ModalClose";
import ModalHeader from "../../../Components/Modal/ModalHeader";
import ModalFooter from "../../../Components/Modal/ModalFooter";
import ModalButton from "../../../Components/Modal/ModalButton";
// import ModalError from '../../../Components/Modal/ModalError'
import ModalConfirm from "../../../Components/Modal/ModalConfirm";
import base from '../../../js/firebase'
import TextField from '../../../Components/TextField';

function formatDate(date) {

    return date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

export const ContactFr = ({
  contentType,
  contentOption,
  websitePage,
  dispatch,
  showContentType,
  content,
  addOption,
  deleteOption,
  deleteOptionField,
  deleteField,
  addField,
  sendContent,
  onChange
}) => (<ModalWrapper>
  <ModalClose onClick={() => {
      dispatch({type: "MODAL_HIDE", payload: false});
    }}>
    &times;
  </ModalClose>
  <ModalContent>
    <ModalHeader>
      <h5>J'ai besoin d'un site internet?</h5>
    </ModalHeader>

  <TextField  label="Nom" onChange={showContentType} select>
      <option value="none">Choose</option>
      {
        contentType.map((type, n) => (<option value={type.name} key={n}>
          {type.name}
        </option>))
      }
    </TextField>
    <br/>
    <form ref={self => (this.contentForm = self)} onChange={onChange}>
      {
        content && content.field.map((field, fieldIndex) => (<Fragment key={field.id}>
          <TextField type="text" label="Name" name={["field", "name"]} placeholder={field.name} id={[fieldIndex]}/>
          <TextField label="Description" rows="1" name={["field", "description"]} id={[fieldIndex]} placeholder={field.description} multiline/>
        <TextField label="Page" name={["field", "page"]} id={[fieldIndex]} select>
            {
              websitePage.map((page, n) => (<option value={page} key={n}>
                {page}
              </option>))
            }
          </TextField>
          <br/> {
            field.option && field.option.map((option, optionIndex) => (<Fragment key={option.id}>
              <br/>
              <label>{option.name}</label>
              <br/>
              <label>{option.description}</label>
              <br/> {
                option.field.map((optionField, optionfieldIndex) => (<Fragment key={optionField.id}>
                  {
                    optionField.name && (<Fragment>

                    <TextField label="Name" type="text" placeholder="" name={["option", "name"]} id={[fieldIndex, optionIndex, optionfieldIndex]}/>
                    </Fragment>)
                  }
                  {
                    optionField.text && (<Fragment>

                    <TextField label="text" type="text" name={["option", "text"]} id={[fieldIndex, optionIndex, optionfieldIndex]} placeholder=""/>
                    </Fragment>
                  )
                  }

                  {
                    optionField.url && (<Fragment>
                    <TextField label="Url" type="text" name={["option", "url"]} id={[fieldIndex, optionIndex, optionfieldIndex]} placeholder=""/>
                    </Fragment>)
                  }
                  {
                    optionField.path && (<Fragment>
                    <TextField label="Path" type="text" name={["option", "path"]} id={[fieldIndex, optionIndex, optionfieldIndex]} placeholder=""/>
                    </Fragment>)
                  }
                  {
                    optionField.color && (<Fragment>
                    <TextField label="Color" type="text" name={["option", "color"]} id={[fieldIndex, optionIndex, optionfieldIndex]} placeholder=""/>
                    </Fragment>)
                  }
                  {
                    optionField.paragraph && (<Fragment>
                    <TextField label="Paragraph" rows="1" name={["option", "paragraph"]} id={[fieldIndex, optionIndex, optionfieldIndex]} placeholder="" multiline/>
                    </Fragment>)
                  }

                  <Fragment>
                  <TextField label="Order" type="number" name={["option", "order"]} id={[fieldIndex, optionIndex, optionfieldIndex]} placeholder="" defaultValue={optionField.order}/>
                  </Fragment>

                  <br/>
                  <button type="button" onClick={() => deleteOptionField(fieldIndex, optionIndex, optionfieldIndex, optionField.id)}>
                    Delete Option Field
                  </button>
                  <br/>
                </Fragment>))
              }
              <br/>
              <button type="button" onClick={() => deleteOption(fieldIndex, option.id, optionIndex)}>
                Delete Option
              </button>
              <br/>
            </Fragment>))
          }
          <br/> {
            content && contentOption.map((option, n) => (<Fragment key={n}>
              <button type="button" onClick={() => addOption(option.name, fieldIndex)}>
                {option.name}
              </button>
            </Fragment>))
          }
          <br/> {
            content.field.length > 1 && (<button type="button" onClick={() => deleteField(field.id)}>
              Delete Field
            </button>)
          }
          <button type="button" onClick={() => addField()}>
            Add Field
          </button>
          <br/>
        </Fragment>))
      }
    </form>
    <ModalFooter>
    {
     content &&  <button type="button" onClick={() => sendContent(this.contentForm)}>
        send
      </button>}
    </ModalFooter>
  </ModalContent>
</ModalWrapper>);

export const Confirmation = ({dispatch}) => (<ModalWrapper>
  <ModalContent>
    <ModalConfirm>
      Félicitation ! Nous avons envoyé votre email avec succés.
      <p>Je vous recontacterai sous 48h.</p>
      <p>Merci.</p>
    </ModalConfirm>
    <div className="col-12" align="center">
      <ModalButton onClick={() => {
          dispatch({type: "MODAL_HIDE", payload: false});
        }}>
        &times; Fermer
      </ModalButton>
    </div>
  </ModalContent>
</ModalWrapper>);

class ModalFr extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: null,
      contentType: [],
      contentOption: [],
      websitePage: []
    };
  }
  componentWillMount() {
    base.syncState('contentType', {
      context: this,
      state: 'contentType',
      asArray: true
    });
    base.syncState('contentOption', {
      context: this,
      state: 'contentOption',
      asArray: true
    });
    base.syncState('websitePage', {
      context: this,
      state: 'websitePage',
      asArray: true
    });
  }

  showContentType = e => {
    const {contentType} = this.state;
    const choice = contentType.find(type => type.name === e.target.value);
    const newContent = JSON.parse(JSON.stringify(choice));
    newContent.id = Date.now();
    newContent.created_at = formatDate(new Date());
    newContent.updated_at = formatDate(new Date());
    newContent.field[0].id = Date.now();
    newContent.field[0].created_at = formatDate(new Date());
    newContent.field[0].updated_at = formatDate(new Date());
    this.setState({content: newContent});
  };
  addField = () => {
    const {content, contentType} = this.state;
    const field = contentType.find(type => type.name === content.name);
    const newContentfield = JSON.parse(JSON.stringify(content));
    const newField = JSON.parse(JSON.stringify(field));
    newField.id = Date.now();
    newField.created_at = formatDate(new Date());
    newField.updated_at = formatDate(new Date());
    newField.field[0].id = Date.now();
    newField.field[0].created_at = formatDate(new Date());
    newField.field[0].updated_at = formatDate(new Date());
    newContentfield.field.push(newField.field[0]);
    this.setState(prevState => {
      return {content: newContentfield};
    });
  };

  addOption = (option, fieldIndex) => {
    const {content, contentOption} = this.state;
    const newContent = JSON.parse(JSON.stringify(content));
    const choice = contentOption.find(type => type.name === option);
    const newChoice = JSON.parse(JSON.stringify(choice));
    newChoice.id = Date.now();
    newChoice.created_at = formatDate(new Date());
    newChoice.updated_at = formatDate(new Date());
    newChoice.field[0].id = Date.now();
    newChoice.field[0].created_at = formatDate(new Date());
    newChoice.field[0].updated_at = formatDate(new Date());
    const root = newContent.field[fieldIndex].option
    const index = (root)
      ? root.findIndex(x => x.name === newChoice.name)
      : null;
    if (index === null) {
      newContent.field[fieldIndex]['option'] = []
      newContent.field[fieldIndex].option.push(newChoice);
      this.setState({content: newContent});
    } else if (index === -1) {
      newContent.field[fieldIndex].option.push(newChoice);
      this.setState({content: newContent});
    } else {
      newContent.field[fieldIndex].option[index].field.push(newChoice.field[0]);

      this.setState({content: newContent});
    }
  };

  deleteOption = (fieldIndex, optionId, optionIndex) => {
    const {content} = this.state;
    const newContent = JSON.parse(JSON.stringify(content));
    let filter = newContent.field[fieldIndex].option.filter(option => option.id !== optionId);
    newContent.field[fieldIndex].option = filter;
    this.setState({content: newContent});
  };

  deleteOptionField = (fieldIndex, optionIndex, optionfieldIndex, optionFieldId) => {
    const {content} = this.state;
    const newContent = JSON.parse(JSON.stringify(content));
    const root = newContent.field[fieldIndex].option[optionIndex].field
    let filter = root.filter(field => field.id !== optionFieldId);
    newContent.field[fieldIndex].option[optionIndex].field = filter;
    this.setState({content: newContent});
  };

  deleteField = fieldId => {
    const {content} = this.state;
    const newContent = JSON.parse(JSON.stringify(content));
    const deleteField = newContent.map(content => {
      let filter = content.field.filter(field => field.id !== fieldId);
      content.field = filter;
      return content;
    });
    this.setState({content: deleteField});
  };

  onChange = (e) => {
    const {content} = this.state;
    const newContent = JSON.parse(JSON.stringify(content));
    const {name, id, value} = e.target
    let nameArray = name.split(",")
    let newId = id.split(",").map(Number)
      if (nameArray[0] === "field") {
        newContent.field[newId[0]][nameArray[1]] = value
      }
      if (nameArray[0] === "option") {
        newContent.field[newId[0]].option[newId[1]].field[newId[2]][nameArray[1]] = value
      }
    this.setState({content: newContent});

  }

  sendContent = (form) => {
    const {dispatch} = this.props
    const {content} = this.state;
    dispatch({
      type: 'NEW_CONTENT_REQUESTED',
      payload: {
        content: content.name,
        body: content
      }
    })

  };
  render() {
    const {Modal, dispatch} = this.props;
    const {content, contentType, contentOption, websitePage} = this.state;

    switch (Modal) {
      case "Contact":
        return (<ContactFr dispatch={dispatch} showContentType={this.showContentType}/>);
      case "Confirmation":
        return <Confirmation dispatch={dispatch}/>;
      default:
        return (<ContactFr contentType={contentType} contentOption={contentOption} websitePage={websitePage} dispatch={dispatch} showContentType={this.showContentType} content={content} addField={this.addField} addOption={this.addOption} deleteOption={this.deleteOption} deleteOptionField={this.deleteOptionField} deleteField={this.deleteField} sendContent={this.sendContent} onChange={this.onChange}/>);
    }
  }
}

const mapStateToProps = state => {
  return {Modal: state.UI.Modal, modalSAtatus: state.UI.modalSAtatus};
};
export default withRouter(connect(mapStateToProps)(ModalFr));
