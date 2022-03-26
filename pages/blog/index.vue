<template>
    <div class="my-20 max-w-6xl m-auto pt-5">
        <h1 class="text-5xl md:text-4xl text-gray-700">Featured Posts</h1>
        <div class="grid grid-cols-3 gap-8 mt-8">
            <div class="bg-white shadow-md rounded-md border" v-for="post in posts" :key="post._id">
                <img class="rounded-t-md" :src="post.displayImageUrl" alt />
                <div class="p-4">
                    <h3 class="text-2xl text-gray-700 leading-none">{{ post.title }}</h3>
                    <p
                        class="font-light leading-tight mt-4 text-gray-500 mb-4"
                    >Learn how blockchain businesses can utilize cloud solutions for their computing needs and how DigitalOcean supports a range of blockchain customers with affordable, simple cloud computing.</p>

                    <div class="flex justify-end">
                        <router-link class="text-pink-500" :to="'/blog/' + post.slug">Read Post</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getBlog } from '@formify-tech/blog-builder'

export default {
    head: {
        title: "Blog | Formify",
    },
    async asyncData() {
        const blogAPI = getBlog();
        const postResponse = await blogAPI.getPosts()

        return {
            posts: postResponse.posts
        }
    }
};
</script>
