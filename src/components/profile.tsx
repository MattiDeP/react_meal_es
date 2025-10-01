import { useUser } from '../context/UserContext';

function Profile() {
  const { user } = useUser();

  return (
    <div>
      <h1>Login effettuato!</h1>
      <p>Benvenuto nel tuo profilo, {user ? ` ${user.name}` : ''}!</p>
    </div>
  );
}

export default Profile;


