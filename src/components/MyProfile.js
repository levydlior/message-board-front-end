import React, { useEffect, useState } from "react";

function MyProfile(loggedInUser) {
    const [user, setUser] = useState({})
  const { userId } = loggedInUser;

  useEffect(() => {
    fetch(`http://localhost:9292/user/${userId}`)
      .then((r) => r.json())
      .then((user) => setUser(user));
  }, []);

  return <div id="profile-section">
    <h2>My Profile</h2>
    <img src={user.avatar_url} alt='profile avatar' id="profile-img"/>
    <h3>{user.user_name}</h3>
    <button>Delete account</button>
    </div>;
}

export default MyProfile;
