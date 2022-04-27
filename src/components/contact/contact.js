

import React from 'react'
import * as ContactStyles from "./contact.module.css"
import axios from 'axios';
const API_PATH = 'http://localhost:1992/api/sendMail.php';

export default function Contact() {

  return (
    <div className={ContactStyles.contact}>
      <p>Skontaktuj się</p>
      <div>
        <form action="/action_page.php">

          <label>Imię i nazwisko</label>
          <input type="text" id="firstlastname" name="firstlastname" placeholder="Imię i nazwisko" />
          <label>Adres e-mail</label>
          <input type="email" id="email" name="email" placeholder="Twój adres e-mail" />

          <label>Temat</label>
          <input type="text" id="Subject" name="Subject" placeholder="Temat wiadomości" />

          <label>Wiadomość</label>
          <textarea id="message" name="message" placeholder="Twoja wiadomość"></textarea>
          <input type="submit" value="Wyślij" />
          
        </form>
      </div>
    </div>
  )
}