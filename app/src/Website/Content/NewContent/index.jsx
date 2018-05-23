import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import ModalWrapper from '../../../Components/Modal/ModalWrapper'
import ModalContent from '../../../Components/Modal/ModalContent'
import ModalClose from '../../../Components/Modal/ModalClose'
import ModalHeader from '../../../Components/Modal/ModalHeader'
import ModalFooter from '../../../Components/Modal/ModalFooter'
import ModalButton from '../../../Components/Modal/ModalButton'
import ModalError from '../../../Components/Modal/ModalError'
import ModalConfirm from '../../../Components/Modal/ModalConfirm'
import data from '../../../data.json';

const ContentType = data.contentType

export const ContactFr = ({dispatch, modalSAtatus}) => (<ModalWrapper>
  <ModalClose onClick={() => {
      dispatch({type: "MODAL_HIDE", payload: false})
    }}>&times;</ModalClose>
  <ModalContent>
    <ModalHeader>
      <h5>J'ai besoin d'un site internet?</h5>

    </ModalHeader>

          <form ref={self => this.contactForm = self}>
                <label>Nom</label>
                <select onChange={e=>console.log(e.target.value)}>
                  <option value="none">Choose</option>
                  {ContentType.map((type,n)=><option value={type.name} key={n}>{type.name}</option>)}
                </select>


          </form>
    <ModalFooter>

    </ModalFooter>
  </ModalContent>

</ModalWrapper>);




export const HireFr = ({dispatch,modalSAtatus}) => (<ModalWrapper>
  <ModalContent>
    <ModalClose onClick={() => {
        dispatch({type: "MODAL_HIDE", payload: false})
      }}>&times;</ModalClose>

    <ModalHeader>
      <h5>J'embauche</h5>
    </ModalHeader>
    <form ref={self => this.contactForm = self}>
      <div className="form-row">
        <div className="col-12 col-md-6">
          <label>Nom</label>
          <input type="text" placeholder="Nom" name="lastname"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Prénom</label>
          <input type="text" placeholder="Prénom" name="firstname"/>
        </div>

        <div className="col-12 col-md-6">
          <label>Téléphone</label>
          <input type="text" placeholder="Téléphone" name="phone"/>
        </div>
        <div className="col-12 col-md-6">
          <label>Langue de préférence</label>
          <select name="language" defaultValue="English">
            <option>Anglais</option>
            <option>Français</option>
          </select>
        </div>
        <div className="col-12 col-md-6">
          <label>Entreprise</label>
          <input type="text" placeholder="Entreprise" name="company"/>
        </div>
        <div className="col-12 col-md-6">
          <label>E-mail</label>
          <input type="email" placeholder="exemple@xxx.com" name="email"/>
        </div>
        <div className="col-12">
          <label>Message</label>
          <textarea rows="4" placeholder="Decrivez le poste que vous offrez." name="message"></textarea>
        </div>
        {
          modalSAtatus === false && <ModalError className="col-12">
          Désolé... Un problem est survenu lorsque nous avons essayé d'envoyer votre email. Verifiez votre connection internet puis ressayez.
            </ModalError>
        }
      </div>

    </form>
    <ModalFooter className="row">
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            dispatch({type: "MODAL_HIDE", payload: false})
          }}>&times; Fermer</ModalButton>
      </div>
      <div className="col-12 col-md-6" align="center">
        <ModalButton onClick={() => {
            const {
              firstname,
              lastname,
              email,
              phone,
              language,
              message,
              company
            } = this.contactForm;

            dispatch({
              type: 'SEND_CONTACT_INFO',
              payload: {
                subject: "I want to hire",
                firstname: firstname.value,
                lastname: lastname.value,
                email: email.value,
                phone: phone.value,
                language: language.value,
                message: message.value,
                company: company.value
              }
            })

          }} primary="primary">Envoyer</ModalButton>
      </div>
    </ModalFooter>
  </ModalContent>

</ModalWrapper>);

export const Confirmation = ({dispatch}) => (<ModalWrapper>

  <ModalContent>
    <ModalConfirm>
      Félicitation ! Nous avons envoyé votre email avec succés.
      <p>Je vous recontacterai sous 48h.
      </p>
      <p>Merci.</p>
    </ModalConfirm>
    <div className="col-12" align="center">
      <ModalButton onClick={() => {
          dispatch({type: "MODAL_HIDE", payload: false})
        }}>&times; Fermer</ModalButton>
    </div>
  </ModalContent>

</ModalWrapper>);

class ModalFr extends Component {

  render() {
    const {Modal, dispatch, modalSAtatus} = this.props
    switch (Modal) {
      case 'Contact':
        return (<ContactFr dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Hire':
        return (<HireFr dispatch={dispatch} modalSAtatus={modalSAtatus}/>)
      case 'Confirmation':
        return (<Confirmation dispatch={dispatch}/>)
      default:
        return (<ContactFr dispatch={dispatch} modalSAtatus={modalSAtatus}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Modal: state.UI.Modal, modalSAtatus: state.UI.modalSAtatus}

}
export default withRouter(connect(mapStateToProps)(ModalFr));
