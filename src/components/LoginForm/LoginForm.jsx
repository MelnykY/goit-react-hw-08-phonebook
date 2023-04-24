import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { ErrorMessage, Formik } from 'formik';
import { object, string } from 'yup';
import {
  ErrorMessageText,
  Container,
  Label,
  Text,
  Input,
  FormBox,
  LogInButton,
  Title,
} from './LoginForm.styled';

const initialValues = {
  email: '',
  password: '',
};

const userSchema = object({
  email: string().email('Invalid email').required('Email is required'),
  password: string().required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(logIn({ email, password }));
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
          <Title>LOG IN</Title>
        
            <Label>
              <Text>EMAIL</Text>
              <Input
                placeholder="Please enter your email address"
                type="text"
                name="email"
              />
              <ErrorMessage component={ErrorMessageText} name="email" />
            </Label>
       
            <Label>
              <Text>PASSWORD</Text>
              <Input
                placeholder="Please enter your password"
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
