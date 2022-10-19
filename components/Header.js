// Header component to be used on every page
import Link from "next/link";

// Import image from bootstrap library
import Image from "react-bootstrap/Image";

// Link Styles
const linkStyle = {
  marginLeft: "auto",
  marginRight: "2rem",
  fontSize: "20px",
  fontWeight: "bold",
  color: "#fff"
};

// Logo Styles
const appLogoStyling = {
  marginTop: 0,
  marginBottom: 15,
  marginRight: 15,
  marginLeft: 15,
  width: 100,
};

const Header = () => (
  <div className="headerSection">
    <Image
      src="/static/images/logo.png"
      alt="App Logo"
      style={appLogoStyling}
    />
    <h1>Jokes Generator</h1>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    {/* Styling for header */}
    <style jsx>{`
          h1 {
            display: inline;
            margin-left: 16px;
            color: #fff;
          }
      a {
        margin-right: 16px;
      }
      .headerSection {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        border-bottom: 1px solid #dedede;
        background-color: #000;
      }
    `}</style>
  </div>
);

// Export header to be used by other files within the application
export default Header;
