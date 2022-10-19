// Post page to display jokes and their punchlines
// Import components
import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Image from "react-bootstrap/Image";

// Styling for image
const imgStyle = {
  width: "40rem",
  border: "1px #97afa3 solid",
};

const images = [
  '/static/images/laugh1.jpg',
  '/static/images/laugh2.jpg',
  '/static/images/laugh3.jpg',
]

// function to display random image from images array
const imageToDisplay = () => {
  return images[Math.floor(Math.random()*3)];
}
// function to display page
const Post = (props) => (
  <Layout>
    <div className="container">
      <div className="left-column">
        {/* Get joke setup and punchline from props */}
        <h1>Joke Setup</h1>
        <div className="setup">{props.joke.setup}</div>
        <h1>Punchline</h1>
        <div className="delivery">{props.joke.delivery}</div>
      </div>
      <div className="right">
        {" "}
        <Image
          src={imageToDisplay()}
          alt="Laughing Meme"
          style={imgStyle}
        />
      </div>
    </div>
    {/* Styling for post page */}
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: row;
        padding-top: 1rem;
        border-left: 1px solid #dedede;
        border-right: 1px solid #dedede;
      }
      .left-column {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding: 1rem;
        margin-right: 0.5rem;
      }
      .right {
        flex: 1;
      }
      .setup {
        font-size: 1.5rem;
      }
      .delivery {
        font-weight: bold;
        margin-top: .5rem;
        font-size: 1.5rem;
        color: blue;
      }
    `}</style>
  </Layout>
);

/* Fetch specific joke from jokes api using the id specified when user clicked link on home page */
Post.getInitialProps = async function (context) {
  imageToDisplay();
  // Get id of post passed through from server.js
  const { id } = context.query;
  const response = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
  const joke = await response.json();

  // Pass joke on to main function as props
  return { joke };
};

// Export post component to be used by other files
export default Post;
