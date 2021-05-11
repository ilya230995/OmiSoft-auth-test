import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(5, 'Too Short!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

export default SignupSchema;
