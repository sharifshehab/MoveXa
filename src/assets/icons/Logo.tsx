import logo from "../images/logo.png"

export default function Logo({ size = 20 }) {
  return (
    <img src={logo} alt="" className={`w-${size}`} />
  );
}
