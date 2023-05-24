import styles from "./User.module.css";

export const User = ({ username, age }) => {
  return (
    <div className={styles["user-container"]}>
      <p>
        {username} ({age} years old)
      </p>
    </div>
  );
};

export default User;
