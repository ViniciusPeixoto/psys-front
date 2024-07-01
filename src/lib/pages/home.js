import React, { useEffect, useState } from 'react';
import { getCurrentUser } from '../components/api';
import { Container } from 'react-bootstrap';

const HomePage = () => {
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
            } catch (error) {
                console.error('Error fetching current user:', error)
            }
        };

        fetchCurrentUser();
    }, []);

    return (
        <Container>
            {user ? (
                <h1>Welcome, {user.username}</h1>
            ) : (
                <h1>Please, login before using this app.</h1>
            )}    
        </Container>
    );
};

export default HomePage;