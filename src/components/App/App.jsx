import './App.css';
import Profile from '../Profile/Profile.jsx';
import clsx from 'clsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHisory from '../TransactionHistory/TransactionHistory.jsx';

function App() {
  return (
    <>
      <Profile />
      <FriendList />
      <TransactionHisory />
    </>
  );
}

export default App;
