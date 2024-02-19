import { useDispatch } from "react-redux";
import { addContact } from "reduxx/contacts/operations";
import { useContacts } from "hooks/useContact";
import Swal from "sweetalert2";

import css from './ContactForm.module.css';
import cssUtils from 'cssCommonComponents/cssUtils.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const { contacts } = useContacts();

    const handleSubmit = e => {
        e.preventDefault();

        const { name, number } = e.target;
        const contact = { name: name.value, number: number.value };

        if (contacts.find(existingContact => existingContact.name.toLowerCase() === name.value.toLowerCase())) {
            Swal.fire({
                title: `${contact.name}`,
                text: 'is already in your contacts.',
                color: '#000',
                padding: '12px 36px 24px 36px',
                confirmButtonColor: '#000',
                confirmButtonText: 'OK',
                width: '420px',
            })
        } else {
            dispatch(addContact(contact));
        }
        e.target.reset();
    }

    return (
        <div className={css.contactForm__wrap}>
            <h2 className={css.contactForm__title}>Phonebook</h2>
            <form
                onSubmit={handleSubmit}
                className={css.contactForm}
            >
                <input
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces."
                    required
                    placeholder="Name"
                    className={css.contactForm__input}
                />
                <input
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Phone"
                    className={css.contactForm__input}
                />
                <button className={cssUtils.button__dark} type="submit">
                    Add contact
                </button>
            </form>
        </div>
    );
}

export default ContactForm;