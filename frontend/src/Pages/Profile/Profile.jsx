import { useContext } from 'react';
import { UserContext } from '../../Context/userContext';

export function Profile() {
    const {user} = useContext(UserContext);
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
        </ProfileContainer>
    ); 
}