import React, { useEffect, useState } from 'react';
import { listPlantedOwn } from '../components/api';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { formatDateTime } from '../components/dateFormatter';

const PlantedPage = () => {
    const [treesData, setTreesData] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <Container className='mt-5'>
            <h2>Your Planted Trees</h2>
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
    );
};

export default PlantedPage;