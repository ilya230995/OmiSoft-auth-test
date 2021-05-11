import { Formik, Form, Field } from 'formik';
import { signIn } from '../redux/auth/auth-operation';
import { useDispatch } from 'react-redux';
import SignupSchema from '../helpers/validationScheme';
import s from '../css/auth.module.css';

function LogInPage() {
  const dispatch = useDispatch();

  return (
    <div className={s.auth}>
      <h2 className={s.formTitle}>Member Login</h2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          const email = values.email;
          const password = values.password;
          dispatch(signIn({ email, password }));
        }}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off" className={s.formWrapper}>
            <Field
              type="email"
              name="email"
              placeholder="&#x2709; E-Mail"
              className={`${s.formItem} ${s.email}`}
            />
            {errors.email && touched.email ? (
              <div className={s.errors}>{errors.email}</div>
            ) : null}

            <Field
              type="password"
              name="password"
              placeholder="&#61475; Password"
              className={`${s.formItem} ${s.password}`}
            />
            {errors.password && touched.password ? (
              <div className={s.errors}>{errors.password}</div>
            ) : null}

            <button type="submit" className={s.btn}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p className={s.someText}>Forgot Username / Password?</p>
      <p className={s.someText}>Create Account</p>
    </div>
  );
}

export default LogInPage;
