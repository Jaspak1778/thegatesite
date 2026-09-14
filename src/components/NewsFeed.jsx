import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import etusivuMd from "../content/otsikot.md?raw";

const NewsFeed = () => {

  const components = {
    a: ({ href, children, ...props }) => {

      if (href && href.startsWith("/")) {
        return (
          <Link to={href.toLowerCase()} {...props}>
            {children}
          </Link>
        );
      }

      return (
        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>
      );
    },
  };

  return (
    <section className="news-section">
      <ReactMarkdown components={components}>
        {etusivuMd}
      </ReactMarkdown>
    </section>
  );
};

export default NewsFeed;