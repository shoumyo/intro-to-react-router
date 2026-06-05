import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post/Post';

const Posts = () => {
    const post=useLoaderData();

    return (
        <div>
            <h3>These are my posts:{post.length}</h3>
            <div>
                {
                    post.map(post=><Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;