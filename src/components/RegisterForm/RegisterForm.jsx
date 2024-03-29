import { useDispatch } from 'react-redux';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import { register } from 'redux/auth/operations';
import {
  ErrorMessageText,
  Container,
  Label,
  Text,
  Input,
  FormBox,
  LogInButton,
  Title,
} from './RegisterForm.styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const userSchema = object({
  name: string()
    .required('Name is required')
    .min(2, 'Too Short!')
    .max(25, 'Too Long!'),
  email: string().email('Invalid email').required('Email is required'),
  password: string().required(
    'Your password must be at least 8 characters long, 1 number & 1 symbol, 1 uppercase & 1 lowercase character.'
  ),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, email, password }, { resetForm }) => {
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
      >
        <FormBox autoComplete="off">
          <Title>SIGN UP</Title>
          <Label>
            <Text>NAME</Text>
            <Input placeholder="Please enter a name" type="text" name="name" />
            <ErrorMessage component={ErrorMessageText} name="name" />
          </Label>
          <Label>
            <Text>EMAIL</Text>
            <Input
              placeholder="Please enter email address"
              type="text"
              name="email"
            />
            <ErrorMessage component={ErrorMessageText} name="email" />
          </Label>
          <Label>
            <Text>PASSWORD</Text>
            <Input
              placeholder="Please enter password"
              type="password"
              name="password"
            />
            <ErrorMessage component={ErrorMessageText} name="password" />
          </Label>
          <LogInButton type="submit">SUBMIT</LogInButton>
        </FormBox>
      </Formik>
    </Container>
  );
};
