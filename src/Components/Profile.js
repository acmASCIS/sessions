import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from '../Contexts/User/UserContext';

import Post from './Post';

const axios = require('axios');
const instance = axios.create({baseURL: 'http://localhost:3003'});

export default function Profile() {
    const user = useContext(UserContext);
    const [posts, setPosts] = useState({});

    const getPosts = async () => {
        try{
            let temp = await instance.get(`/users/${user.name}`);
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
