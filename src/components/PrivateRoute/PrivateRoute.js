import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/auth" />}
    </Route>
  );
}
