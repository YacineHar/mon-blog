import { useState } from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Article from './components/Article'
import articles from './data/articles'


function App() {

  const [recherche, setRecherche] = useState("")

  // la balise vide <></> représente la balise fragment <fragment></fragment> permet de représenter une balise parent qui contiendra tout le contenu sans que cette balise soit envoyée dans la page html
  return (
    <>
      <Nav />
      <Header />     

      <div className="container mb-4">
        <div className="d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Rechercher un article"
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
          />
          <button type="button" className="btn btn-secondary" onClick={() => setRecherche("")}>Tout afficher</button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {articles
            .filter((article) => {
              const mot = recherche.toLowerCase()
              const categories = article.categories.join(" ")
              const tags = article.tags.map((tag) => tag.name).join(" ")

              return (
                article.title.toLowerCase().includes(mot) ||
                article.text.toLowerCase().includes(mot) ||
                categories.toLowerCase().includes(mot) ||
                tags.toLowerCase().includes(mot)
              )
            })
            .map((article) => (
              <Article
                key={article.id}
                title={article.title}
                img={article.img}
                text={article.text}
                categories={article.categories}
                tags={article.tags}
                onFiltre={setRecherche}
              />
            ))}
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
