import Card from "../UI/Card/Card";
import User from "../User/User";

const UserList = ({ users }) => {
  const usersToShow = users.map((user) => {
    return <User key={user.id} username={user.username} age={user.age} />;
  });

  if (!users.length) {
    return null;
  }

  return <Card>{usersToShow}</Card>;
};

export default UserList;
