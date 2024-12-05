import { TextLimit } from "../TextLimit/TextLimit";
import { CardContainer, CardBody, CardFooter } from "./CardStyle";

//trocar news para props
export function Card({ news }) {
    console.log(news)
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <h2>{news.title}</h2>
                    <img src={news.banner} alt="Imagem"></img>
                </div>
                <TextLimit text={news.text} limit={150}/>
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