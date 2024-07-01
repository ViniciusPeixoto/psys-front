import React, { useEffect, useState } from 'react';
import { listTrees } from '../components/api';
import { Container, ListGroup } from 'react-bootstrap';

const TreesPage = () => {
    const [treesData, setTreesData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrees = async () => {
            try{
                const treesData = await listTrees();
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
            <h2>Trees Catalog</h2>
            {loading ? (
                <p>Loading trees information...</p>
            ) : treesData ? (
                <ListGroup>
                    {treesData.map((tree) => (
                        <ListGroup.Item key={tree.id}>
                            <h5>{tree.name}</h5>
                            <p className='fst-italic'>{tree.scientific_name}</p>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            ) : (
                <p>No trees data to show</p>
            )}
        </Container>
    );
};

export default TreesPage;