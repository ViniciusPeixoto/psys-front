import React, { useEffect, useState } from 'react';
import { getCurrentUser, getProfile } from '../components/api';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

                const profileData = await getProfile(userData.id);
                console.log('profile data:', profileData)
                setProfileData(profileData)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching current user:', error)
                setLoading(false)
            }
        };

        fetchCurrentUser();
    }, []);

    return (
        <Container className='mt-5'>
            <h2>Profile information</h2>
            {loading ? (
                <p>Loading profile information...</p>
            ) : user ? (
                <h3>{user.username}</h3>
            ) : (
                <p>Please login to see profile information</p>
            )}
            {profileData ? (
                <ListGroup>
                    <ListGroup.Item><strong>About:</strong> {profileData.about}</ListGroup.Item>
                    <ListGroup.Item><strong>Date joined:</strong> {profileData.joined}</ListGroup.Item>
                </ListGroup>
            ) : (
                <p>No profile data to show</p>
            )}
            {loading ? (
                <Button variant='primary'></Button>
            ) : profileData ? (
                <Link to="/update_profile" state={{isEdit: true, profile: profileData}}>
                    <Button variant='primary'>Update profile</Button>
                </Link>
            ) : (
                <Link to="/update_profile" state={{isEdit: false, userId: user.id}}>
                    <Button variant='primary'>Create profile</Button>
                </Link>
            )}
        </Container>
    );
};

export default ProfilePage;