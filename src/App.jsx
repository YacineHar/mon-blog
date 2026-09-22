import Header from './components/Header.jsx'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Article from './components/Article'
import articles from './data/articles'


function App() {

  // la balise vide <></> représente la balise fragment <fragment></fragment> permet de représenter une balise parent qui contiendra tout le contenu sans que cette balise soit envoyée dans la page html
  return (
    <>
      <Nav />
      <Header />     

      <div className="container">
        <div className="row">
          {articles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              img={article.img}
              text={article.text}
              categories={article.categories}
              tags={article.tags}
            />
          ))}
        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
