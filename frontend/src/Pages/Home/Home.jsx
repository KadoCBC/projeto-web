import { Navbar } from "../../components/Navbar/Navbar"
import { Card } from "../../components/Cards/Card"
import { news } from "../../Datas.js";

export default function Home(){
    return (
    <> 
    <Navbar />
        {news.map((item, index) => (
            <Card key={index} news={item}/>
        ))}
    </>
    )
}