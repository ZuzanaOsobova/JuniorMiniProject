import './styles/main.css';


const app = document.getElementById('app');

if (app){

    //Načtení kontaktů z API
    const response = await fetch('/api/contacts');
    const data = await response.json();
    const contacts = data.data;
    console.log('contacts', contacts);



    contacts.forEach(contact => {
        const li = document.createElement('li');
        li.setAttribute('class', 'contact');

        //data očištěná od undefined
        const firstName = contact.firstName ? contact.firstName : '';
        const lastName = contact.lastName ? contact.lastName : '';
        const email = contact.email ? contact.email : '';
        const phone = contact.phone ? contact.phone : '';
        const note = contact.note ? contact.note : '';
        const gender = contact.gender ? contact.gender : 'Preferred not to say';
        const birthday = contact.birthday ? contact.birthday : '';

        const city = contact.city ? contact.city : '';
        const street = contact.streeting ? contact.streeting : '';
        const houseNumber = contact.houseNumber ? contact.houseNumber : '';
        const zipCode = contact.zipCode ? contact.zipCode : '';




        li.setAttribute('class', 'contact');

        li.innerHTML = `<div class="contact-name">${firstName} ${lastName}</div>
                            <div class="detail-panel">
                                Email: ${email} <br>
                                Phone: ${phone} <br>
                                Note: ${note} <br>
                                Gender: ${gender} <br>
                                Birthday: ${birthday} <br>
                                
                                <fieldset>
                                    <legend>Adress</legend>
                                    City: ${city} <br>
                                    Street: ${street} <br>
                                    House Number: ${houseNumber} <br>
                                    Zip Code: ${zipCode} <br>
                                </fieldset> 
                                
                                <br>
                                <div id="delete-${contact._id}"></div>
                          </div>
                        `;

        li.addEventListener('click', (e) => {
            const target = e.target;
            if (!(target instanceof Element)) return;

            if (target.classList.contains('contact-name')) {
                const contactItem = target.closest('.contact');
                const detail = contactItem?.querySelector('.detail-panel') as HTMLElement;

                if (!detail) return;

                if (detail.style.display === 'none') {
                    detail.style.display = 'block';
                } else {
                    detail.style.display = 'none'; }
            }
        });

        //TODO otázka, zda opravdu chceme záznam vymazat
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        deleteBtn.addEventListener('click', async () => {



            await fetch(`/api/contacts/${contact._id}`, {
                method: 'DELETE'
            });

            //TODO reload stránky, aby byly vidět změny => smazané kontaky

        });



        //Přidáváme celý list a delete button na stránku
        const list = document.getElementById('contacts-list');
        if (list) {
            list.appendChild(li);

            const deleteDiv = document.getElementById('delete-'+contact._id);
            if (deleteDiv) {
                deleteDiv.appendChild(deleteBtn)
            }
        }

    });


}