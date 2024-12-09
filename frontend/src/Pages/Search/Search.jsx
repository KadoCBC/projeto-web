import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Card } from "../../components/Card/Card";
import { ContainerResults, SearchPosts, TextResults } from "./SearchStyled";
import { searchPosts } from "../../services/postsServices";



export default function Search() {
    const {title} = useParams();
    const [posts, setPosts] = useState([]); 

    async function search() {
        try {
            const postsApi = await searchPosts(title);
            setPosts(postsApi);
            console.log(postsApi.data.foundPosts);
        } catch (err) {
            console.log(err);
            setPosts([]);
        }
    }
    
    useEffect(() => {
        search();
    }, [title]);

    return (
        <ContainerResults>
            <TextResults>
                <span>
                    {posts.length
                        ? `Resultados encontrados para: ${posts.length} ${
                            posts.length > 1 ? "resultados" : "resultado"
                        } para: ${title}`
                    : `Nenhum resultado encontrado para: ${title}`}                     
                </span>
                </TextResults>           
            <SearchPosts>
                {posts.map((item) => (
                    <Card 
                    key={item.id} 
                    title={item.title} 
                    text={item.text}
                    banner={item.banner}
                    likes={item.likes}
                    comments={item.comments}
                    />

                ))}
            </SearchPosts>
        </ContainerResults>
    )
}