import { useEffect } from 'react';
import Chat from './components/chat/chat';
import List from './components/list/list';
import Login from './components/login/Login';
import Notification from './components/notification/Notification';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './lib/firebase';
import { useUserStore } from './lib/userStore';


const App = () => {
  
  const userStore = useUserStore();
  console.log(userStore); 

  const { currentUser, isLoading, fetchUserInfo } = userStore;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log('Firebase user:', user); 
      if (user) {
        fetchUserInfo(user.uid);
      }
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);


  return (
    <>
    <div className="container">
      {currentUser ? (
        <>
          <List />
          <Chat />
        </>
      ) : (
        <Login />
      )}
      <Notification />
    </div>
    </>
  );
};

export default App;
