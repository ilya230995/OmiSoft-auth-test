import LogInPage from './views/loginPage';
import ExitPage from './views/mainPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { fetchCurrentUser } from './redux/auth/auth-operation';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import s from './css/Background.module.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  });

  return (
    <div className={s.background}>
      <Switch>
        <PublicRoute path="/auth">
          <LogInPage />
        </PublicRoute>
        <PrivateRoute exact path="/exitPage">
          <ExitPage />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
