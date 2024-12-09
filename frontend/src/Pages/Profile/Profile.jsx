import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/userContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfilePosts,
  ProfileUser,
} from "./ProfileStyled";
import { getAllPostsByUser } from "../../services/postsServices";
import { Card } from "../../components/Card/Card";
import { Link } from "react-router-dom";

export function Profile() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  async function findAllPostsByUser() {
    const postsResponse = await getAllPostsByUser();
    setPosts(postsResponse.data.results);
  }

  useEffect(() => {
    findAllPostsByUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileBackground src={user.background} alt="" />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <Link to="/manage-news/add/news">
            <ProfileIconAdd>
              <i className="bi bi-plus-circle"></i>
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>

      <ProfilePosts>
        {posts.length === 0 && <h3>Você ainda não criou nenhuma noticia...</h3>}

        {posts.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              actions={true}
            />
          );
        })}
      </ProfilePosts>
    </ProfileContainer>
  );
}