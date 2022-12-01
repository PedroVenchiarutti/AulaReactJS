import React, { useState, useEffect } from "react";
import axios from "axios";
import Carrosel from "./Components/Carrosel";

const App = () => {
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [name, setName] = useState("");

  // Esse use effect pega o user
  useEffect(() => {
    const response = axios
      .get(`https://api.github.com/users/${name}`)
      .then((resp) => {
        setUser(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fazer a funcao que atualiza os repos
  const updateRepos = () => {
    console.log("Atualizando os repos");
  };

  // Esse pega os repositorios
  useEffect(() => {
    axios
      .get(user.repos_url)
      .then((response) => {
        setRepos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user && user.repos_url]);

  return (
    <div className="bg-amber-500">
      <h1>{user.login}</h1>
      <h2>{user.bio}</h2>
      <Carrosel repos={repos} />

      <span className="">Digite seu nome do GITHUB</span>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={updateRepos}>Atualizar</button>
    </div>
  );
};

export default App;
