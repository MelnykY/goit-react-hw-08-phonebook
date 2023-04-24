import { useSelector } from 'react-redux';

import { selectFilter } from '../../redux/filter/selectors';
import { selectContacts } from '../../redux/contacts/selectors';

import { List } from './ListContact.styled';
import ElementContact from '../ElementContact';

const ListContact = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const makeFiltredContacts = () => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const makeList = array => {
    return array.map(({ id, name, number }) => {
      return (
        <ElementContact
          key={id}
          contactName={name}
          contactNumber={number}
          contactId={id}
        />
      );
    });
  };
  return <List>{makeList(makeFiltredContacts())}</List>;
};

export default ListContact;
