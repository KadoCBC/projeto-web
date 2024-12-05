import { Navbar } from "../../components/Navbar/Navbar"
import { Card } from "../../components/Cards/Card"
import { news } from "../../Datas.js"; //apagar quando tiver integração com BD
import { getAllPosts } from "../../../services/postServices.js"; //aqui pega dados do bd
import { HomeBody, HomeHeader } from "./HomeStyled.jsx";
import { useState } from "react"; //atualiza estado inicial

export default function Home() {

    //const [news, setNews] = useState([]);

    async function findAllPosts() {
        const response = await getAllPosts();
        setNews(response.data.results); //muda o estado para renderização
    }

    //findAllPosts();
    //console.log(news)
    return (
        <>
            <Navbar />
            <HomeHeader>

            </HomeHeader>
            <HomeBody>
                {news.map((item, index) => (
                     <Card
                     key={item.id}
                     title={item.title}
                     banner={item.banner}
                     likes={item.likes.length}
                     comments={item.comments.length}/>
                ))}
            </HomeBody>
        </>
    )
}