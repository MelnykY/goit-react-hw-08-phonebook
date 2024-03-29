import { ErrorMessage } from 'formik';
import { object, string } from 'yup';
import PropTypes from 'prop-types';
import {
  FormBox,
  InputName,
  InputTel,
  Button,
  FormikWrapper,
  Message,
} from './FormContact.styled';

const initialValues = {
  name: '',
  number: '',
};

const userSchema = object({
  name: string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  number: string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const FormContact = ({ onSubmit }) => {
  function handleSubmit({ name, number }, { resetForm }) {
    onSubmit(name, number);
    resetForm();
  }

  return (
    <FormikWrapper
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <FormBox autoComplete="off">
        <label>
          <span>NAME</span>
          <InputName placeholder="Enter contact name" type="text" name="name" />
          <ErrorMessage component={Message} name="name" />
        </label>
        <label>
          <span>PHONE</span>
          <InputTel
            placeholder="Enter contact phone"
            type="tel"
            name="number"
          />
          <ErrorMessage component={Message} name="number" />
        </label>
        <Button type="submit">ADD CONTACT</Button>
      </FormBox>
    </FormikWrapper>
  );
};

FormContact.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
