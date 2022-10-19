// Global layout for all pages

// Import header component
import Header from "./Header";

// Styling for layout
const layoutStyle = {
  margin: 0,
  padding: 0,
};

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    {/* Global styles for whole app */}
    <style global jsx>{`
      body {
        margin: 0;
      }
      li {
        line-height: 32px;
      }
      a {
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    `}</style>
  </div>
);

// Export layout to be used by other files
export default Layout;
