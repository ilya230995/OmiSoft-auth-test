import { signOut } from '../redux/auth/auth-actions';
import { useDispatch } from 'react-redux';
import s from '../css/auth.module.css';

export default function MainPage() {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`${s.btn} ${s.mainPageBtn}`}
        onClick={() => dispatch(signOut())}
      >
        Exit
      </button>
    </>
  );
}
