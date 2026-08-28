import { useState } from "react";
import logo from "../assets/gatelogo.png";
import '../App.css';
import news from '../content/uutiset.md?raw';
import ReactMarkdown from 'react-markdown';

const Home = () => {
  return (
    <div>

      <section>
        <h4 style={{ marginTop: "4%", marginLeft : "4%" }}>
          Gaming ja Tech katsauksia - Tervetuloa porttien sisälle
        </h4>
      </section>
          <div style={{ marginLeft: "10vh", marginTop: "10%", border: "solid", borderColor: "grey" }}>
      <h3>Peliuutiset</h3>
      <section>
        <hr />
        
          <ReactMarkdown>{news}</ReactMarkdown>
        
        </section>
      </div>
    </div>
  );
};

export default Home;
