import GroupImages from "../images/group pictures/group pictures.png";
import { UserCard } from "./UserCards";
import { userData } from "./Properties";

export default function Main() {
  const cards = userData.map((item) => {
    return (
      <UserCard
        image={item.image}
        rating={item.rating}
        comments={item.comments}
        location={item.location}
        title={item.title}
        price={item.price}
        isAvailable={item.isAvailable}
        isOnline={item.isOnline}
      />
    );
  });

  return (
    <div className="main">
      <img src={GroupImages} className="main-image" />
      <div className="title-section">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>

      <div className="users-container">{cards}</div>
    </div>
  );
}
