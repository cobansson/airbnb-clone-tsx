import { Properties } from "./Interface";
import Star from "../images/user pictures/star.png";

export const UserCard: React.ComponentType<Properties> = (props) => {
  return (
    <div className="user-container">
      <img src={props.image} className="user-image" />
      <div className="rate-comment-and-location-section">
        <img src={Star} className="star" />
        <p>{props.rating}</p>
        <span className="gray">
          <p>({props.comments})</p>
          <p>&#183;</p>
          <p>{props.location}</p>
        </span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
      <div className="badge">
        {!props.isAvailable && <p>SOLD OUT</p>}
        {props.isOnline && <p>ONLINE</p>}
      </div>
    </div>
  );
};
