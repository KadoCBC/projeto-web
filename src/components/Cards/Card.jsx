import { CardContainer, CardBody, CardFooter } from "./CardStyle";

export function Card({ news }) {
    console.log(news)
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{news.title}</h2>
                    <p>{news.text}</p>
                </div>
                <img src={news.image} alt="Imagem"></img>
            </CardBody>

            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up" alt="Imagem" />
                    <span>{news.likes}</span>
                </div>
                <div>
                    <i className="bi bi-chat"></i>
                    <span>{news.comments}</span>
                </div>
            </CardFooter>
        </CardContainer>
    );
}