
import React, { useEffect, useState } from 'react'
import { Container, InputGroup, FormControl, Button, Card, Row } from 'react-bootstrap';

const CLIENT_ID = '18d90c60afc74e9699747de3c1b8aa91';
const CLIENT_SECRET = '7676d3e619af46759448eb13f0248a74';

const Spotify = () => {
    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // API Access token
        var authParameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
        }
        fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))
    }, [])
    // Search
    async function search() {
        console.log("Search for " + searchInput);

        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        var showID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=shows&episodes', searchParameters)
        .then(response => response.json())
        .then(data => {console.log('Here are the shows', data)})

        console.log("Show ID is " + showID)
        console.log("here is ", accessToken);

        // Get req using search to get artist id --------------------
        var searchParameters = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        }
        var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id })

        console.log("Artist ID is " + artistID)

        // Get req with 'artist id grab all the albums from that artist
        var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setAlbums(data.items);
            })

        // Display those albums to the user
    }

    console.log(albums);
    return (
        <div>
            <Container>
                <InputGroup className='mb-3' size='lg'>
                    <FormControl
                        placeholder='search for episode'
                        type='input'
                        onKeyPress={event => {
                            if (event.key == 'Enter') {
                                search();
                            }
                        }}
                        onChange={event => setSearchInput(event.target.value)}
                    />
                    <Button className='btn btn-dark' onClick={search} >search</Button>
                </InputGroup>
            </Container>
            <Container>
                <Row className='mx-2 row row-cols-4'>
                    {albums.map((album, i) => {
                        console.log(album);
                        return (
                            <Card>
                                <Card.Img src={album.images[0].url} />
                                <Card.Body>
                                    <Card.Title>{album.name}</Card.Title>
                                    {album.external_urls[0]}
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default Spotify