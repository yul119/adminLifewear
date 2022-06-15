import "./users.scss";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import UserList from "./UsersList";

const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="usersContainer">
        <Navbar />
        <UserList />
      </div>
    </div>
  );
};

export default Users;
