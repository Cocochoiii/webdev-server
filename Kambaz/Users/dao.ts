// The users DAO is the only code that touches the users array
import { v4 as uuidv4 } from "uuid";
export default function UsersDao(db) {
  let { users } = db;
  const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    users = [...users, newUser];
    return newUser;
  };
  const findAllUsers = () => users;
  const findUserById = (userId) => users.find((user) => user._id === userId);
  const findUserByUsername = (username) =>
    users.find((user) => user.username === username);
  const findUserByCredentials = (username, password) =>
    users.find((user) => user.username === username && user.password === password);
  const findUsersForCourse = (courseId) =>
    users.filter((user) =>
      db.enrollments.some(
        (enrollment) => enrollment.user === user._id && enrollment.course === courseId,
      ),
    );
  const updateUser = (userId, user) =>
    (users = users.map((u) => (u._id === userId ? user : u)));
  const deleteUser = (userId) =>
    (users = users.filter((u) => u._id !== userId));
  return {
    createUser, findAllUsers, findUserById, findUserByUsername,
    findUserByCredentials, findUsersForCourse, updateUser, deleteUser,
  };
}
