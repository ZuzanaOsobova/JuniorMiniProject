import type { FC } from 'react';
import type { Contact } from '../types/contact';
import '../main.css';

interface ContactFormProps {
  onSubmit: (contact: Omit<Contact, '_id' | 'create_date'>) => void;
  initialData?: Contact;
}

export const ContactForm: FC<ContactFormProps> = ({ onSubmit, initialData }) => {
  // TODO: Implementovat formulář s těmito prvky:
  //
  // Povinná pole:
  // - firstName (text input)
  // - lastName (text input)
  // - email (email input)
  //
  // Radio buttons pro pohlaví:
  // - gender (mužské/ženské/jiné)
  //
  // Volitelná pole:
  // - phone (tel input)
  // - note (textarea)
  // - city (text input)
  // - street (text input)
  // - houseNumber (text input)
  // - zipCode (number input)
  // - birthDate (date input) - hezky naformátované
  //
  // Funkcionality:
  // - Validace (povinná pole, validní email)
  // - Zobrazení chybových hlášek
  // - Styling pomocí CSS/SCSS
  //
  // Bonusové úkoly:
  // - Loading indikátor při odesílání
  // - Zobrazení úspěšné/chybové hlášky po odeslání
  //
  // Použití:
  // - Použít připravený contactsApi.createContact() nebo contactsApi.updateContact()
  // - Pro přístup k API klientu: import { contactsApi } from '../api/contactsApi'

  return (
      <div>
          <h2>{initialData ? 'Editovat kontakt' : 'Vytvořit nový kontakt'}</h2>


          <div className="form-group">
              <form className="form-horizontal" id="contactForm">

                  <label htmlFor="firstName">First Name:*</label>
                  <input type="text" name="firstName" id="firstName" placeholder="Mary" required/>

                  <label htmlFor="lastName">Last Name:*</label>
                  <input type="text" name="lastName" id="lastName" placeholder="Sue" required/>

                  <label htmlFor="email">Email:*</label>
                  <input type="email" name="email" id="email" placeholder="example@example.com" required/>
                  <p id="incorrectEmail" style={{color: "#dd0000"}}></p>


                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" name="phone" id="phone"
                         placeholder="+000 123 456 789"/>

                  <label htmlFor="note">Note</label>
                  <textarea name="note" id="note" placeholder="Note" rows={4}></textarea>


                  <fieldset id="gender">
                      <legend>Gender</legend>
                      <div className="gender">
                        <span className="singleGender">
                          <input type="radio" name="gender" id="female" value="female"/>
                          <label htmlFor="female">Female</label>
                        </span>

                                  <span className="singleGender">
                          <input type="radio" name="gender" id="male" value="male"/>
                          <label htmlFor="male">Male</label>
                        </span>

                                  <span className="singleGender">
                          <input type="radio" name="gender" id="other" value="other"/>
                          <label htmlFor="other">Other</label>
                        </span>
                      </div>

                  </fieldset>


                  <fieldset>
                      <legend>Address</legend>
                      <label htmlFor="city">City:</label>
                      <input type="text" name="city" id="city" placeholder="City"/>

                      <label htmlFor="street">Street:</label>
                      <input type="text" name="street" id="street" placeholder="Street"/>

                      <label htmlFor="houseNumber">House Number:</label>
                      <input type="text" name="houseNumber" id="houseNumber" placeholder="House Number"/>

                      <label htmlFor="zipCode">Zip Code:</label>
                      <input type="number" name="zipCode" id="zipCode" placeholder="Zip Code"/>
                  </fieldset>


                  <label htmlFor="birthDate">Birthday:</label>
                  <input type="date" name="birthDate" id="birthDate" min="1900-01-01"/>
                  <small id="birthDateError" className="error" aria-live="polite"></small><br/>

                  <button type="submit" className="submit">Submit</button>
                  <small id="message"></small>

              </form>

          </div>

      </div>
  );
};
