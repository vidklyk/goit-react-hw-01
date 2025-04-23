import './App.css';
import Profile from '../Profile/Profile.jsx';
import userData from '../../userData.json';
import friends from '../../friends.json';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
import transactions from '../../transactions.json';

function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
