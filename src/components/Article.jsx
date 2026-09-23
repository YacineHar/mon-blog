// On vérifie si l'information existe et si elle existe on la parcours avec .map()
// { tags && tags.map( ...

// Plus rapide d'écriture
// { tags?.map( ... 

// La propriété key permet à react d'identifier chaque élément d'une liste pour gérer les mise à jour du DOM

function Article({title, img, text, categories, tags, onFiltre}) {
    return (
        <div className="col-sm-4 mb-3">
            <div className="article border">
                <div className="bloc-img">
                    <img src={img.src} className="img-fluid" alt={img.alt} />
                </div>
                <div className="bloc-article p-2">
                    <h2 className="my-3">{title}</h2>
                    { categories && categories.map((name, index) => (
                        <button type="button" className="btn btn-outline-dark me-3" key={index} onClick={() => onFiltre(name)}>{name}</button>
                    ) )}
                    <hr />
                    { tags && tags.map((tag) => (
                        <button type="button" className="btn btn-dark me-3" key={tag.id} onClick={() => onFiltre(tag.name)}>{tag.name}</button>
                    ) )}
                    <hr />
                    <p>
                        {text}
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Article
