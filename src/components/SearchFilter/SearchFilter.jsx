import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filter/slice';

import { Label, Input } from './SearchFilter.styled';

const SearchFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(filterContacts(value));
  };
  return (
    <Label>
    FIND CONTACT BY NAME <Input type="text" name="filter" onChange={handleFilter} />
    </Label>
  );
};

export default SearchFilter;
