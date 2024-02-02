import { useDispatch, useSelector } from "react-redux";
import { editContact } from "reduxx/contacts/operations";
import ContactsIcon from '@mui/icons-material/Contacts';
import { getLoading } from "reduxx/contacts/selectors";
import Loader from "components/Loader/Loader";

const Modal = ({ contact, toggleOpen }) => {
    const { name, number, id } = contact;
    const dispatch = useDispatch();
    const isLoading = useSelector(getLoading);

    const handleSubmit = e => {
        e.preventDefault();

        const { name, number } = e.target;
        const contact = { name: name.value, number: number.value, id };
        dispatch(editContact(contact));
        toggleOpen();
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <button onClick={toggleOpen}>
                        <ContactsIcon sixe={'30'} />
                    </button>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces."
                        required
                        placeholder="Name"
                        defaultValue={name}
                    />
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."
                        required
                        placeholder="Number"
                        defaultValue={number}
                    />
                    <button type="submit">
                        <span>Edit contact</span>{' '}
                        {isLoading ? <Loader/> : <ContactsIcon size={'20'}/>}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Modal;