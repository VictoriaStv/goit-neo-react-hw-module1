import "modern-normalize/modern-normalize.css";
import "./App.css";

import userData from "./userData.json";
import friends from "./friends.json";

import Profile from "./components/Profile/Profile";

import "./App.css";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
    </>
  );
};
export default App;
