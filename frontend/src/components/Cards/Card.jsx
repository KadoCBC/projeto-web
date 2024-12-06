import { TextLimit } from "../TextLimit/TextLimit";
import { CardContainer, CardBody, CardFooter, CardHeader } from "./CardStyle";

//trocar news para props
export function Card({ news }) {
    return (
        <CardContainer>
            <CardBody>
                <div>
                    <CardHeader>
                    <h2>{news.title}</h2>
                    <TextLimit text={news.text} limit={150} />
                    </CardHeader>

                    <CardFooter>
                        <section>
                            <i className="bi bi-hand-thumbs-up" alt="Imagem" />
                            <span>{news.likes}</span> {/*adicionar '?.length' -->*/}
                        </section>
                        <section>
                            <i className="bi bi-chat"></i>
                            <span>{news.comments}</span> {/*adicionar '?.length' -->*/}
                        </section>
                    </CardFooter>
                </div>
                <img src={news.banner} alt="Imagem"></img>
            </CardBody>
        </CardContainer>
    );
}