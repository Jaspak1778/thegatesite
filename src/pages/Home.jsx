import NewsFeed from "../components/NewsFeed";
import "../App.css"


const Home = () => {
  return (
    <>
      <header className="home-header">
        <h1>Gaming ja Tech katsauksia - Tervetuloa porttien sisälle</h1>
      </header>
     
      <NewsFeed />
    </>
  );
};

export default Home;
