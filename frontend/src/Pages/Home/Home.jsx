import { Navbar } from "../../components/Navbar/Navbar"
import { Card } from "../../components/Cards/Card"
import { news, topnews } from "../../Datas.js"; //apagar quando tiver integração com BD
import { getAllPosts, getTopPost } from "../../services/postServices.js"; //aqui pega dados do bd
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import { useState } from "react"; //atualiza estado inicial

export default function Home() {

    //const [posts, setPost] = useState([]);
    //const [posts, setTopPost] = useState([]); 

    async function findPost() {
        const postsResponse = await getAllPosts();
        setPost(postsResponse.data.results); //muda o estado para renderização

        const topPostResponse = await getTopPost();
        setTopPost(topPostResponse.data.post);
    }

    //useEffect(() => {
        //findPost(); //nao entrar no loop
    //}, [])
    //console.log(news)
    return (
        <>
            <HomeHeader>
            {topnews.map((item, index) => (
                    <Card key={index} news={item} ></Card> //tirar quando implementar com bd
                     //<Card
                     //top=(true)
                     //title={item.title}
                     //banner={item.banner}
                     //likes={item.likes}
                     //comments={item.comments}/>
                ))}
            </HomeHeader>
            <HomeBody>
                {news.map((item, index) => (
                    <Card key={index} news={item} ></Card> //tirar quando implementar com bd
                     //<Card
                     //key={item.id}
                     //title={item.title}
                     //banner={item.banner}
                     //likes={item.likes.length}
                     //comments={item.comments.length}/>
                ))}
            </HomeBody>
        </>
    )
}