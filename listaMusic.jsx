import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


const musicas = [];
musicas.push("With Or Without You ", "Behind Blue Eyes", "A Cura", "Sex", "Thats All");

const cantores  = [];
cantores.push("U2","Limp Bizkit","Lulu Santos","Cheat Codes", "Genesis")

const lista = [];
const minhasMusicas = <ol>{musicas.map(musica => <li key = {musica}>{musica}</li>)}+{cantores.map(cantores =>{cantores})}</ol>;

for (let i = 0; i < musicas.length; i++) {
  let nome = musicas[i];
  let cantor = cantores[i];
  let elemento = <li key={i}>{nome} - {cantor}</li>;

  lista.push(elemento);
}

const final = (
  <div className="wrapper">
  <h1>As mais curtidas do Spotify da Jana</h1>
  <h3><ol>{lista}</ol></h3>
  </div>
  );
ReactDOM.render(final, document.getElementById("root"));
