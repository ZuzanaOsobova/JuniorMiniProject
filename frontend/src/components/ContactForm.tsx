import type { FC } from 'react';
import type { Contact } from '../types/contact';
import '../main.css';
import TextInput from "./TextInput.tsx";
import NumberInput from "./NumberInput.tsx";
import TextArea from "./TextArea.tsx";
import TelInput from "./TelInput.tsx";
import DateInput from "./DateInput.tsx";
import RadioInput from "./RadioInput.tsx";

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


                  <TextInput idName={"firstName"} name={"First Name"} placeholder={"John"} required={true}/>

                  <TextInput name={"Last Name"} idName={"lastName"} placeholder={"Smith"} required={true}/>

                  <TextInput name={"Email"} idName={"email"} placeholder={"john.smith@tardis.uk"} />


                  <TelInput idName={"phone"} name={"Phone"} />

                  <TextArea idName={"note"} name={"Note"} placeholder={"Enter some notes about your new contact..."} />


                  <fieldset id="gender">
                      <legend>Gender</legend>
                      <div className="gender">

                          <RadioInput idName={"female"} name={"gender"} />
                          <RadioInput idName={"male"} name={"gender"} />
                          <RadioInput idName={"other"} name={"gender"} />

                      </div>

                  </fieldset>


                  <fieldset>
                      <legend>Address</legend>

                      <TextInput idName={"city"} name={"City"} placeholder={"Gotham"} />
                      <TextInput idName={"street"} name={"Street"} placeholder={"Batstreet"} />
                      <TextInput idName={"houseNumber"} name={"House Number"} placeholder={"47"} />

                      <NumberInput idName={"zipCode"} name={"Zip Code"} />
                  </fieldset>

                  <DateInput idName={"birthDate"} name={"Birthday"} />


                  <button type="submit" className="submit">Submit</button>
                  <small id="message"></small>

              </form>

          </div>

      </div>
  );
};
