import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(5, 'Too Short!').required('Password is required'),
  email: Yup.string().email('Invalid email').required('E-Mail is required'),
});

export default SignupSchema;
