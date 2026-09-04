import ReactMarkdown from "react-markdown";
import news from "../content/uutiset.md?raw";

const NewsFeed = () => {
  return (
    <section className="news-section">
      <ReactMarkdown>{news}</ReactMarkdown>
    </section>
  );
};

export default NewsFeed;