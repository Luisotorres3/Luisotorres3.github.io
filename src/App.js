import React, { useEffect, useState } from "react";
//import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/luisotorres3/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => console.error("Error fetching the repos:", error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <h1>My GitHub Portfolio</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
