import css from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p
        className={clsx(css.status, {
          [css.online]: isOnline,
          [css.offline]: !isOnline,
        })}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
