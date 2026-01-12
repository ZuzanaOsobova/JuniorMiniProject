import './styles/main.css';


const app = document.getElementById('app');

if (app){



// Attach one delegated listener to the list
    const contactsList = document.getElementById('contacts-list');

    if (contactsList){

        contactsList.addEventListener('click', (e: MouseEvent) => {
            const target = e.target;
            if (!(target instanceof Element)) return;

            console.log(target);

            // 1) Toggle detail when clicking the contact name
            if (target.classList.contains('contact-name')) {
                const contactItem = target.closest('.contact');
                const detail = contactItem?.querySelector('.detail-panel') as HTMLElement;

                if (!detail) return;

                if (detail.style.display === 'none'){ detail.style.display = 'block';
                } else {
                    detail.style.display = 'none'; }
            }

        });
    }

}