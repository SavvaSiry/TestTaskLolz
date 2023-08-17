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
        async getPostById(ctx, props) {
            await axiosClient.get(`/api/posts/${props}`)
                .then(response => ctx.commit('UPDATE_POST', response.data))
                .catch(error => console.log(error))
        },
    },
    mutations: {
        UPDATE_POSTS(state, payload) {
            state.posts = payload
        },
        UPDATE_POST(state, payload) {
            state.post = payload
        }
    },
    state: {
        posts: [],
        post: {}
    },
    getters: {
        getPosts: state => state.posts,
        getPost: state => state.post
    }
})