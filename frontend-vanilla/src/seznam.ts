import './styles/main.css';


const app = document.getElementById('app');

if (app){

    //Načtení kontaktů z API
    try {
        const response = await fetch('/api/contacts');
        const data = await response.json();
        const contacts = data.data;
        console.log('contacts', contacts);




        contacts.forEach((contact: { firstName: string; lastName: string; email: string; phone: string; note: string; gender: string; birthday: string; city: string; street: string; houseNumber: string; zipCode: number; _id: string; }) => {
            const li = document.createElement('li');
            li.setAttribute('class', 'contact');
            li.setAttribute('id', 'id_'+contact._id);


            li.innerHTML = `<div class="contact-name">${contact.firstName ?? ""} ${contact.lastName ?? ""}</div>
                            <div class="detail-panel" style="display: none">
                                Email: ${contact.email ?? ""} <br>
                                Phone: ${contact.phone ?? ""} <br>
                                Note: ${contact.note ?? ""} <br>
                                Gender: ${contact.gender ?? "Preferred not to say"} <br>
                                Birthday: ${contact.birthday ?? ""} <br>
                                
                                <fieldset>
                                    <legend>Adress</legend>
                                    City: ${contact.city ?? ""} <br>
                                    Street: ${contact.street ?? ""} <br>
                                    House Number: ${contact.houseNumber ?? ""} <br>
                                    Zip Code: ${contact.zipCode ?? ""} <br>
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


            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';

            deleteBtn.addEventListener('click', async () => {
                if(window.confirm("Are you sure you want to delete this contact?" + contact.firstName + " " + contact.lastName)) {

                    deleteBtn.disabled = true;
                    deleteBtn.setAttribute('style', "cursor: not-allowed");

                    try {
                        await fetch(`/api/contacts/${contact._id}`, {
                            method: 'DELETE'
                        });
                        li.remove();
                    } catch (errors) {
                        console.log("Nepodařilo se smazat kontakt.");
                        console.log(errors);
                        deleteBtn.disabled = false;

                    }
                }

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

    } catch (errors){
        console.error(errors);
    }

}