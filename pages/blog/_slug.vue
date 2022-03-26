<template>
    <div class="my-20 max-w-3xl m-auto pt-5">
        <div>
            <h1 class="text-5xl md:text-5xl text-gray-600 font-medium">{{ post.title }}</h1>
            <img :src="post.displayImageUrl" class="my-16" alt />
            <main v-html="post.html"></main>
        </div>
        <hr class="my-4" />
        <h2 class="my-4 text-3xl">Other posts to check out!</h2>
        <div
            class="border-b py-2 cursor-pointer hover:bg-gray-100"
            v-for="post in posts"
            :key="post._id"
        >
            <div class="flex gap-x-4">
                <img class="h-12 w-20 object-cover" :src="post.displayImageUrl" alt />
                <div>
                    <h3 class="text-lg text-gray-700 leading-tight">{{ post.title }}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        title: "Blog | Formify",
    },

};
</script>

<script>
import { getBlog } from '@formify/blog-builder'

export default {
    head: {
        title: "Blog | Formify",
    },
    async asyncData({ $axios, route }) {
        const blogAPI = getBlog();
        const postResponse = await blogAPI.getPost(route.params.slug)
        const postsResponse = await blogAPI.getPosts()

        return {
            post: postResponse.post,
            posts: postsResponse.posts
        }
    }

};
</script>
