import { useContext, useState } from 'react';
import { UserContext } from '../../Context/userContext';
import { ProfileActions, ProfileAvatar, ProfileBackground, ProfileContainer, ProfileHeader, ProfileIconAdd, ProfileIconEdit, ProfileUser } from './ProfileStyled';
import { getAllPostsByUser } from '../../services/postServices';
import useeffect from 'react';
import { Card } from '../../components/Cards/Card'

export function Profile() {
    const {user} = useContext(UserContext);
    const {posts, setPosts} = useState([]);

    async function findAllPostsByUseer() {
        const postsResponse = await getAllPostsByUser();
        setPosts(postsResponse.data.postsByUser);
    }

    useeffect(() => {
        findAllPostsByUseer();
    }, []); 

    return (
        <ProfileContainer>
            <ProfileHeader>
                <ProfileIconEdit>
                    <i className="bi bi-pencil-square"></i>
                </ProfileIconEdit>
                <ProfileBackground src={user.background} alt="" />

                <ProfileUser>
                    <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
                    <h2>{user.name}</h2>
                    <h3>{user.username}</h3>
                </ProfileUser>
                <ProfileActions>
                    <ProfileIconAdd>
                        <i className="bi bi-circle"></i>
                    </ProfileIconAdd>
                </ProfileActions>
            </ProfileHeader>
            <ProfilePosts>
            {posts.length === 0 && <h3>Você ainda não criou nenhuma noticia...</h3>}

            {posts.map((item) => {
                return (
                    <Card
                        key={item._id}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        category={item.category}
                        date={item.date}
                    />
                );
            })}
            </ProfilePosts>
        </ProfileContainer>
    ); 
}