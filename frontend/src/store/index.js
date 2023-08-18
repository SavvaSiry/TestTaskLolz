import Vuex from 'vuex';
import getAxiosClient from "@/service/axiosClientService";

const axiosClient = getAxiosClient();

export const store = new Vuex.Store({
    actions: {
        async getPosts(ctx, props) {
            await axiosClient.get(`/api/posts?page=${props.page}&size=${props.size}`)
                .then(response => ctx.commit('UPDATE_POSTS', response.data))
                .catch(error => console.log(error))
        },
        async getPostById(ctx, id) {
            await axiosClient.get(`/api/posts/${id}`)
                .then(response => ctx.commit('UPDATE_POST', response.data))
                .catch(error => console.log(error))
        },
        async deletePostById(ctx, props) {
            await axiosClient.delete(`/api/posts/${props.id}`)
                .then(ctx.commit('DELETE_POST', props.id))
                .catch(error => console.log(error))
        },
        async updatePostById(ctx, props) {
            await axiosClient.put(`/api/posts/${props.id}`, {
                id: props.id,
                title: props.title,
                description: props.description,
                text: props.text
            })
                .then(response => ctx.commit('UPDATE_POST', response.data))
                .catch(error => console.log(error))
        },
        async createPost(ctx, props) {
            await axiosClient.post(`/api/posts`, props)
                .then(response => ctx.commit('ADD_POST', response.data))
                .catch(error => console.log(error))
        },
        async getPostsCount(ctx) {
            await axiosClient.get(`/api/posts/count`)
                .then(response => ctx.commit('UPDATE_POST_COUNT', response.data))
                .catch(error => console.log(error))
        },
        async getComments(ctx, id) {
            await axiosClient.get(`/api/comments/${id}`)
                .then(response => ctx.commit('UPDATE_COMMENTS', response.data))
                .catch(error => console.log(error))
        },
        async createComment(ctx, props) {
            await axiosClient.post(`/api/comments`, props)
                .then(response => ctx.commit('ADD_COMMENT', response.data))
                .catch(error => console.log(error))
        },
    },
    mutations: {
        UPDATE_POSTS(state, payload) {
            state.posts = payload
        },
        ADD_POST(state, payload) {
            state.posts.push(payload)
        },
        DELETE_POST(state, payload) {
            state.posts = state.posts.filter(post => post.id === payload.id)
        },
        UPDATE_POST(state, payload) {
            state.post = payload
        },
        UPDATE_POST_COUNT(state, payload) {
            state.postsCount = payload
        },
        UPDATE_COMMENTS(state, payload) {
            state.comments = payload
        },
        ADD_COMMENT(state, payload) {
            state.comments.push(payload)
        }
    },
    state: {
        posts: [],
        post: {},
        postsCount: 0,
        comments: []
    },
    getters: {
        getPosts: state => state.posts,
        getPost: state => state.post,
        getPostsCount: state => state.postsCount,
        getComments: state => state.comments,
    }
})
