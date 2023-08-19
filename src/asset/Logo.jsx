import LogoImage from "./png/logo.png";
import LogoImageWhite from "./png/logo-w.png";
export default function Logo({ color = "black" }) {
  return (
    <div>
      <img src={color === "white" ? LogoImageWhite : LogoImage} alt="logo" />
    </div>
  );
}
