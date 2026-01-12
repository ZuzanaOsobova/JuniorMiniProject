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



        li.setAttribute('class', 'contact');

        li.innerHTML = `<div class="contact-name">${contact.firstName} ${contact.lastName}</div>
                            <div class="detail-panel">
                                ${contact.email}
                            <button class="delete-btn">Delete</button>
                          </div>
                        `;

        li.addEventListener('click', () => {
            // Zobrazit detail
        });

        const list = document.getElementById('contacts-list');
        if (list) {list.appendChild(li);}
    });



    // List Listener for display toggle
    const contactsList = document.getElementById('contacts-list');

    if (contactsList){

        contactsList.addEventListener('click', (e: MouseEvent) => {
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
    }

}