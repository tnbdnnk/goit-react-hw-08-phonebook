import { useDispatch } from "react-redux";
import { addContact } from "reduxx/contacts/operations";
import { useContacts } from "hooks/useContact";
import Notiflix from "notiflix";
// import { RiContactsLine } from "react-icons/ri";
// import ContactsIcon from '@mui/icons-material/Contacts';
// import Loader from "components/Loader/Loader";

import css from './ContactForm.module.css';
import cssUtils from 'cssCommonComponents/cssUtils.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const { contacts } = useContacts();
    // const { isLoading } = useContacts();

    const handleSubmit = e => {
        e.preventDefault();

        const { name, number } = e.target;
        const contact = { name: name.value, number: number.value };

        if (contacts.find(existingContact => existingContact.name.toLowerCase() === name.value.toLowerCase())) {
            Notiflix.Notify.failure(`${contact.name} is already in your contacts.`);
        } else {
            dispatch(addContact(contact));
        }
        e.target.reset();
    }

    return (
        <>
            <h2 className={css.contactForm__title}>Phonebook</h2>
            <form
                onSubmit={handleSubmit}
                className={cssUtils.form}
            >
                <input
                    type="text"
                    name="name"
                    title="Name may contain only letters, apostrophe, dash and spaces."
                    required
                    placeholder="Name"
                    className={cssUtils.form__input}
                />
                <input
                    type="tel"
                    name="number"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    placeholder="Phone"
                    className={cssUtils.form__input}
                />
                <button className={cssUtils.button__dark} type="submit">
                    <span>Add contact</span>
                    {/* {isLoading ? (
                        <Loader color={'#ffffff'} size={'20'} />
                    ) : (
                            <ContactsIcon size={'20'}/>
                    )} */}
                </button>
            </form>
        </>
    );
}

export default ContactForm;