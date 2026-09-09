
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import artikkelitMd from "../content/artikkelit.md?raw";
import "../App.css"

const News = () => {
  const { articleId } = useParams();

  const rawArticles = artikkelitMd.split(/(?:\r?\n)---(?:\r?\n)/);
  const articles = rawArticles.map((block) => {
    const lines = block.split(/\r?\n/);
    const idLineIndex = lines.findIndex((line) =>
      line.trim().toLowerCase().startsWith("id:")
    );

    let id = "";
    let content = block;

    if (idLineIndex !== -1) {
      id = lines[idLineIndex]
        .replace(/id:/i, "")
        .trim()
        .toLowerCase();

      content = lines.slice(idLineIndex + 1).join("\n");
    }

    return { id, content };
  }).filter((art) => art.id !== ""); 

  const targetId = articleId ? articleId.toLowerCase() : articles[0]?.id;
  const currentArticle = articles.find((art) => art.id === targetId);

  return (
    <div className="news-layout">
      <main className="news-content">
        {currentArticle ? (
          <article className="news-section">

            <ReactMarkdown>{currentArticle.content}</ReactMarkdown>
          </article>
        ) : (
          <div className="news-section">
            <h2>Artikkelia ei löytynyt!</h2>
            <p>Tunnisteella "{articleId}" ei löydetty uutista.</p>
            <Link to="/news">Palaa uusimpaan uutiseen</Link>
          </div>
        )}
      </main>

      <aside className="news-sidebar">

        {/*Voidaaan ottaa käyttöön jos haluaa näyttää muut linkit tai vaihtoehtoisia esim liittyviä linkkejä*/}

        <h3>Kaikki artikkelit</h3>
        <ul>
          {articles.map((art) => (
            <li key={art.id}>
              <Link
                to={`/news/${art.id}`}
                style={{
                  fontWeight: art.id === targetId ? "bold" : "normal",
                }}
              >
                {art.id}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default News;