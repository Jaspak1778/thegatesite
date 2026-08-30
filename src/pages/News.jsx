import ReactMarkdown from "react-markdown";
import article1 from "../content/articles_1.md?raw";
import "../App.css";


const News = () => {
  return (
    <>
      <header>
        <h1
          style={{
            marginTop: "4%",
            marginLeft: "4%",
            fontSize: "1.5rem",
            color: "black",
            textAlign :"left",
            backgroundColor : "lightgray"
          }}
        >
          Uutiset
        </h1>
      </header>

      <section
        style={{
          justifyContent: "center",
          margin: "5%",
          border: "1px solid grey",
          color: "black",
        }}
      >
        <br></br>
        <ReactMarkdown>{article1}</ReactMarkdown>
      </section>
    </>
  );
};

export default News