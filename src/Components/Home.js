import React, {useState, useEffect} from 'react';

import Post from './Post';

const axios = require('axios').default;
const instance = axios.create({baseURL: 'http://localhost:3003'});

export default function Home() {
    const [posts, setPosts] = useState({});

    const getPosts = async () => {
        try{
            let temp = await instance.get('/posts');
            setTimeout(() => {
                setPosts(temp.data);
            }, 1000);
        }catch(err){
            console.log(err);
        }
        
    }

    useEffect(async () => {
        await getPosts();
    }, [])
    return (
        <div className="posts">
            {posts.length > 0 ? posts.map(post => (
                <Post title={post.title} body={post.body} createdBy={post.createdBy} />
            )) : "No posts yet!"}
        </div>
    )
}
