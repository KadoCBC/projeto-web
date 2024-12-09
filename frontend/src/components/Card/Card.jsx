import { Link } from "react-router-dom";
import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyle";

export function Card({
  top,
  title,
  text,
  banner,
  actions = false,
  id,
}) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader top={top}>
            {actions && (
              <span>
                <Link to={`/manage-news/edit/${id}`}>
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <Link to={`/manage-news/delete/${id}`}>
                  <i className="bi bi-trash3"></i>
                </Link>
              </span>
            )}
            <h2>{title}</h2>
            <TextLimit text={text} limit={150} />
          </CardHeader>
        </div>

        <img src={banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}