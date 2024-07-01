import React, { useEffect, useState } from 'react';
import { getCurrentUser, listPlantedOwn } from '../components/api';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { formatDateTime } from '../components/dateFormatter';

const PlantedPage = () => {
    const [treesData, setTreesData] = useState(null);
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
            } catch (error) {
                console.error('Error fetching current user:', error)
            }
        };

        fetchCurrentUser();
    }, []);

    useEffect(() => {
        const fetchTrees = async () => {
            try{
                const treesData = await listPlantedOwn();
                setTreesData(treesData)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching trees information:', error)
                setLoading(false)
            }
        };

        fetchTrees();
    }, []);

    const renderPlantedTrees = () => {
        return (
            <Container className='mt-5'>
                {loading ? (
                    <p>Loading trees information...</p>
                ) : treesData ? (
                    <ListGroup>
                        {treesData.map((tree) => (
                            <ListGroup.Item key={tree.id}>
                                <h5>{tree.tree.name}</h5>
                                <p className='fst-italic'>{tree.tree.scientific_name}</p>
                                <p>Account: {tree.account.name}</p>
                                <p>Planted at: {formatDateTime(tree.planted_at)}</p>
                                <p>Age: {tree.age}</p>
                                <p>Location: ({tree.location[0]}, {tree.location[1]})</p>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                ) : (
                    <p>No trees data to show</p>
                )}
                <Button variant='primary' href='/plant'>Plant a new tree</Button>
            </Container>
        )
    }

    return (
        <Container className='mt-5'>
            <h2>Your Planted Trees</h2>
            {user ? (
                renderPlantedTrees()
            ) : (
                <p>Please login to see your planted trees' information</p>
            )}
        </Container>
    )
    
};

export default PlantedPage;