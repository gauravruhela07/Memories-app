import {CREATE, FETCH_ALL, DELETE, UPDATE} from "../constants/actionTypes";
import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = { type: FETCH_ALL, payload: data };

        dispatch(action);
    } catch (err) {
        console.log(err.message);
    }   
    
}

export const createPosts = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPosts(post); 

        const action = { type: CREATE, payload: data };

        dispatch(action);
    } catch (err) {
        console.log(err.message);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const {data} = await api.updatePost(id, post);

        const action = {type: UPDATE, payload: data};
        dispatch(action);
    } catch (err) {
        console.log(err.message);   
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    } catch (err) {
        console.log(err);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);

        const action = {type: UPDATE, payload: data};

        dispatch(action);
    } catch (err) {
        console.log(err);
    }
}