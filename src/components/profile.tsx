import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const username = (location.state as { username?: string } | null)?.username;

  return (
    <div>
      <h1>Login effettuato!</h1>
      <p>Benvenuto nel tuo profilo, {username ? ` ${username}` : ''}!</p>
    </div>
  );
}

export default Profile;


