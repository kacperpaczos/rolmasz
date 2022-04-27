import React from "react";
import axios from "axios";
import * as ContactStyles from "./contact.module.css"
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailSent: false,
      error: null,

    };
  }

  handleFormSubmit = e => {
    e.preventDefault();
    axios({
      method: "post",
      url: 'http://rolmasz.paczos.org/api/contact/index.php', //change this to correct endpoint 
      headers: { "content-type": "application/json" },
      data: this.state
    })
      .then(result => {
        if (result.data.sent) {
          this.setState({
            mailSent: result.data.sent
          });
          this.setState({ error: false });

        } else {
          this.setState({ error: true });

        }
      })
      .catch(error => this.setState({ error: error.message }));
  };

  //handle changing fields

  handleChange = (e, field) => {
    let value = e.target.value;
    let updateValue = {};
    updateValue[field] = value;
    this.setState(updateValue);
  };

  render() {

    return (
      <div className={ContactStyles.contact}>
      <p>Skontaktuj się</p>
      <div>
        <form action="#">

          <label>Imię i nazwisko</label>
          <input type="text" value={this.state.firstName} onChange={e => this.handleChange(e, 'firstName')} placeholder="Imię i nazwisko" required/>
          <label>Adres e-mail</label>
          <input type="email" value={this.state.email} onChange={e => this.handleChange(e, "email")} placeholder="Twój adres e-mail" required/>

          <label>Temat</label>
          <input type="text" value={this.state.subject} onChange={e => this.handleChange(e, "subject")} placeholder="Temat wiadomości" required/>

          <label>Wiadomość</label>
          <textarea value={this.state.message} onChange={e => this.handleChange(e, "message")} placeholder="Twoja wiadomość" required></textarea>
          <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" value="Wyślij" />
          <div>
              {this.state.mailSent && <div className={ContactStyles.success}>List został wysłany.</div>}
              {this.state.error && <div className={ContactStyles.error}>Wystąpił nieoczekiwany błąd. Spróbuj ponownie.</div>}
            </div>
        </form>
      </div>
    </div>
      /*<div className="form-wrapper">
        <h2>Contact form-A</h2>

        <div>
          <form action="#">
            { Name }
            <label>First name</label>
            <input
              type="text"
              placeholder="First name"
              value={this.state.firstName}
              onChange={e => this.handleChange(e, 'firstName')}
              required
            />

            <label>Last name</label>
            <input
              type="text"
              placeholder="Last name"
              value={this.state.lastName}
              onChange={e => this.handleChange(e, 'lastName')}
              required
            />


            { Email }
            <label>Email</label>
            <input
              type="email"
              placeholder="Your@Name.com"
              value={this.state.email}
              onChange={e => this.handleChange(e, "email")}
              required
            />


            <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />

            <div>

              {this.state.mailSent && <div className="success">success</div>}
              {this.state.error && <div className="error">Error</div>}
            </div>
          </form>
        </div>
      </div>*/
    );
  }
}

export default Form;
