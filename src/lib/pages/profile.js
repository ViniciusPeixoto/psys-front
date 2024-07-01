import React, { useEffect, useState } from 'react';
import { getCurrentUser, getProfile } from '../components/api';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { formatDateTime } from '../components/dateFormatter';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchCurrentUser = async () => {
            try{
                const user_response = await getCurrentUser();
                if (!user_response.ok) {
                    throw new Error('Failed to fetch current user')
                }
                const userData = await user_response.json();
                setUser(userData);

                if (userData) {
                    const profileData = await getProfile(userData.id);
                    setProfileData(profileData)
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching current user:', error)
                setLoading(false)
            }
        };

        fetchCurrentUser();
    }, []);

    const renderProfileInformation = () => {
        return (
            <Container>
                <h3>{user.username}</h3>
                {profileData ? (
                    <ListGroup>
                        <ListGroup.Item><strong>About:</strong> {profileData.about}</ListGroup.Item>
                        <ListGroup.Item><strong>Date joined:</strong> {formatDateTime(profileData.joined)}</ListGroup.Item>
                    </ListGroup>
                ) : (
                    <p>No profile data to show</p>
                )}
                {loading ? (
                    <Button variant='primary'></Button>
                ) : profileData ? (
                    <Link to="/update-profile" state={{isEdit: true, profile: profileData}}>
                        <Button variant='primary'>Update profile</Button>
                    </Link>
                ) : (
                    <Link to="/update-profile" state={{isEdit: false, userId: user.id}}>
                        <Button variant='primary'>Create profile</Button>
                    </Link>
                )}
            </Container>
        )
    }

    return (
        <Container className='mt-5'>
            <h2>Profile information</h2>
            {loading ? (
                <p>Loading profile information...</p>
            ) : user ? (
                renderProfileInformation()
            ) : (
                <p>Please login to see profile information</p>
            )}
        </Container>
    );
};

export default ProfilePage;