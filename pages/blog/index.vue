<template>
    <div class="my-20 max-w-6xl m-auto pt-5">
        <h1 class="text-5xl md:text-4xl text-gray-700">Featured Posts</h1>
        <div class="grid grid-cols-3 gap-8 mt-8">
            <div class="bg-white shadow-md rounded-md border" v-for="i in 3" :key="i">
                <img class="rounded-t-md" src="/img/blog/blog.png" alt />
                <div class="p-4">
                    <h3
                        class="text-2xl text-gray-700 leading-none"
                    >Cloud solutions for Blockchain Technology</h3>
                    <p
                        class="font-light leading-tight mt-4 text-gray-500 mb-4"
                    >Learn how blockchain businesses can utilize cloud solutions for their computing needs and how DigitalOcean supports a range of blockchain customers with affordable, simple cloud computing.</p>

                    <div class="flex justify-end">
                        <router-link
                            class="text-pink-500"
                            to="/blog/cloud-solutions-for-blockchain-technology"
                        >Read Post</router-link>
                    </div>
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
