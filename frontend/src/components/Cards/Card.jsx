export function Card({news}) {
    console.log(news)
    return (
        <section>
            <h2>{news.title}</h2>
            <p>{news.text}</p>
            <i className="bi bi-hand-thumbs-up" alt="Imagem" />
            <span>{news.likes}</span>
            <i className="bi bi-chat"></i>
            <span>{news.comments}</span>
        </section>
    );
}