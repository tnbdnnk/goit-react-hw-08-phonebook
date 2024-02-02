import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import ContactList from 'components/ContactsList/ContactsList';
import { useContacts } from 'hooks/useContact';
import { getContacts } from 'reduxx/contacts/operations';

import css from './Contacts.module.css';

const Contacts = () => {
    const dispatch = useDispatch();
    const { contacts } = useContacts();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <section className={css.contacts__section}>
        <div className={css.contacts__wrap}>
            <ContactForm />
        </div>
        <div className={css.contactsList__wrap}>
            <h2 className={css.contacts__title}>Contacts</h2>
            <div className={css.contacts__wrapper}>
            <Filter />
            {contacts.length > 0 ? (
                <ContactList />
            ) : (
                <p className={css.contacts__message}>Add your first contact</p>
            )}
            </div>
        </div>
        </section>
    );
};

export default Contacts;
