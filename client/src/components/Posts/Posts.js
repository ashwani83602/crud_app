import React, { useEffect } from "react";
import { Grid ,CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import Post from "./post/post";
import {getPosts} from '../../actions/posts';

import useStyles from './styles'
import { fetchPosts } from "../../api";
const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    
    useEffect(async () => {
        const myPosts = await fetchPosts();
        console.log('xxxxxxx', myPosts);
    }, [])

    console.log(`===>> ${posts.length}`);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems ="stretch" spacing={3}>
                {
                    posts.map((post)=>(
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} />
                        </Grid>
                    ))}
            </Grid>
        )
        
        
    );
}
export default Posts;