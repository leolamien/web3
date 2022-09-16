import logo from "./LOGO HE VINCI.png";

const Header = (probs) => {
  return (
    <di>
       <img src={logo}></img>
      <h1>{probs.course}</h1>
    </di>
  );
};

export default Header;
