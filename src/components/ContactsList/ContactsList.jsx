import { useDispatch } from "react-redux";
import { deleteContact } from "reduxx/contacts/operations";
import { useContacts } from "hooks/useContact";
import Loader from "components/Loader/Loader";
import SortingButtons from "components/SortingButtons/SortingButtons";
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";

import css from './ContactsList.module.css';

const ContactList = () => {
    const dispatch = useDispatch();
    const { visibleContacts } = useContacts();
    const { isLoading } = useContacts();

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            color: '#000',
            padding: '12px 36px 24px 36px',
            // icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#000',
            cancelButtonColor: '#CD4631',
            confirmButtonText: 'Yes, delete!',
            width: '420px',
            
        }).then(result => {
            if (result.isConfirmed) {
                dispatch(deleteContact(id));
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    color: '#000',
                    confirmButtonColor: '#000',
                    width: '420px',
                    padding: '12px 36px 24px 36px',
                });
            }
        });
    }

    return (
        <div>
            <SortingButtons />
            {isLoading ? (
                <span>
                    {' '}
                    <Loader color={'#CD4631'} size={'50'} />
                </span>
            ) : (
                    <ul className={css.contacts__list}>
                        {visibleContacts.map(({ name, number, id }) => {
                            return (
                                <li
                                    data-id={id}
                                    key={id}
                                    className={css.contacts__item}
                                >
                                    {name} : {number}
                                    <div>
                                        <button
                                            type="button"
                                            onClick={() => handleDelete(id)}
                                            className={css.contacts__button}
                                        >
                                            {isLoading ? (
                                                <Loader color={'#CD4631'} size={'20'} />
                                            ) : (
                                                <DeleteIcon size="10" />
                                            )}
                                        </button>
                                    </div>
                                </li>
                            )
                        })}
                </ul>
            )}
        </div>
    )
}

export default ContactList;