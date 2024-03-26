import backgroundImage from "../../assets/MaskGroup4.png";
import imageBefore from "../../assets/26.svg";
import imageAfter from "../../assets/26.svg";

function Header() {
  return (
    <div
      className="text-center p-2 text-white font-medium text-sm flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: 'center'
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={imageBefore}
          alt="Before"
          style={{ marginRight: "5px", transform: "scaleX(-1)" }}
        />
        <p className="px-2">
          Save up to $500 per year on millions of book titles!
        </p>
        <img src={imageAfter} alt="After" style={{ marginLeft: "5px" }} />
      </div>
    </div>
  );
}

export default Header;
