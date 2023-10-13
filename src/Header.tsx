import AirBnbLogo from "../images/nav pictures/airbnb-logo.png";

export default function Header() {
  return (
    <div className="header">
      <nav>
        <img src={AirBnbLogo} />
      </nav>
    </div>
  );
}
