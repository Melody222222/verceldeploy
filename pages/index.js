// Home page

// Import components and dependencies
import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

// Import image from bootstrap
import Image from "react-bootstrap/Image";

// Styling for logo
const imgStyle = {
  width: "37rem",
  border: "1px solid #6f5f5d",
};

// Uses data from jokes api as props
const Index = (props) => (
  <Layout>
    <div className="page">
      <div className="margin-text">
        <h1>Generate a joke</h1>
        <p>Click one of the links below!</p>
      </div>
      <div className="indexDiv">
        <div className="jokes">
          <ul>
            {/* Create list of jokes */}
            {props.items.jokes.map((value) => {
              return (
                <li className="list" key={value.id}>
                  <Link as={`/joke/${value.id}`} href={`/post?id=${value.id}`}>
                    <a>{value.setup}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="image">
          <Image
            src="/static/images/home-bg.jpg"
            alt="Funniest Jokes Image"
            style={imgStyle}
          />
        </div>
      </div>
    </div>
    {/* Styling for index page */}
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-left: 1px solid #dedede;
        border-right: 1px solid #dedede;
        margin-top: 0rem;
      }
      .indexDiv {
        display: flex;
        flex-direction: row;
      }
      .jokes {
        display: flex;
        flex-direction: column;
        padding-right: 16px;
        margin-right: 8px;
        font-size: 16px;
      }
      .image {
        margin-left: auto;
      }
      h1 {
        margin-bottom: 0;
        padding: 0;
      }
      p {
        margin-bottom: 1rem;
      }
      .list {
        list-style-type: square !important;
      }
      .margin-text {
        margin-left: 20px;
      }
    `}</style>
  </Layout>
);

/* Fetch data from the jokes api with some parameters to get just the category of jokes I want, filtering all the offensive ones*/
Index.getInitialProps = async function () {
  const response = await fetch(
    "https://v2.jokeapi.dev/joke/Any?type=twopart&format=json&lang=en&amount=7&blacklistFlags=nsfw,racist,sexist,explicit"
  );
  const receivedData = await response.json();

  // Make response available
  return {
    items: receivedData,
  };
};

// Export index component to be used by other files
export default Index;
