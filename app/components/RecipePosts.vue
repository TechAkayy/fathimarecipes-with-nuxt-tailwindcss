<script setup lang="ts">
  import type { WP_REST_API_POST } from 'wp-types'
  const { name } = defineProps({
    name: {
      type: String,
      default: 'RecipePosts',
    },
  })

  // const emit = defineEmits(['addToCart'])

  // // Use the addToCart function like this:
  // // Eg-1: addToCart('pizza', 10)
  // // Eg-2: (event) => addToCart('pizza', 10, event)
  // const addToCart = (item, quantity /*, event*/) => {
  // 	emit('addToCart', { item, quantity })
  // }
  /* Auto-generated logic by Vue Designer Headless Wordpress 6.7 begins */
  const { getPgWordpressPosts } = usePgWordpressData()
  const pgData: any = {
    pgWordpressData: {},
  }

  const pgPostsArgs = { posts: { filters: { per_page: '5', _embed: 'true' } } }

  pgData.pgWordpressData.posts = {
    ...pgPostsArgs.posts,
    data: await getPgWordpressPosts(pgPostsArgs.posts),
  }

  const pgPosts = pgData.pgWordpressData.posts.data
  /* Auto-generated logic by Vue Designer Headless Wordpress 6.7 ends */

  // pgPosts.forEach((pgPost: WP_REST_API_POST) => {
  //   pgPost._embedded['wp:featuredmedia'] = pgPost._embedded[
  //     'wp:featuredmedia'
  //   ].map((media: any) => ({
  //     ...media,
  //     source_url: `${import.meta.env.VITE_WORDPRESS_URL}${media.source_url}`,
  //   }))
  //   pgPost.content.rendered = pgPost.content.rendered.replaceAll(
  //     '/wp-content/',
  //     `${import.meta.env.VITE_WORDPRESS_URL}/wp-content/`,
  //   )
  // })

  const recipes = pgPosts.map((recipe: WP_REST_API_POST) => {
    return {
      ...recipe,
      dateDisplay: new Date(recipe.date).toDateString(),
    }
  })
</script>
<template>
  <div class="container mx-auto px-4 py-16">
    <h2 class="text-4xl font-serif text-primary-800 text-center mb-12">
      Latest Recipes
    </h2>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      data-pg-posts
    >
      <article
        v-for="(pgPost, index) in recipes"
        :key="index"
        class="bg-white rounded-lg overflow-hidden shadow-lg"
      >
        <NuxtLink :to="`${pgPost.slug}?id=${pgPost.id}`">
          <div class="relative h-64">
            <img
              alt="Homemade Pasta"
              class="w-full h-full object-cover"
              :src="pgPost._embedded['wp:featuredmedia'][0].source_url"
            />
          </div>
          <article
            class="group relative rounded-2xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div class="p-5 sm:p-6">
              <p
                class="text-secondary-600 text-xs sm:text-sm tracking-wide uppercase mb-2"
              >
                {{ pgPost.dateDisplay }}
              </p>
              <h3
                class="font-serif text-xl sm:text-2xl text-primary-800 leading-snug mb-3"
              >
                <NuxtLink
                  :to="pgPost.link"
                  class="text-primary-800 hover:text-primary-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded"
                >
                  <span v-html="pgPost.title.rendered"></span>
                </NuxtLink>
              </h3>
              <div
                class="text-gray-600 text-sm sm:text-base leading-relaxed mb-5"
                v-html="pgPost.excerpt.rendered"
              ></div>
              <NuxtLink
                :to="pgPost.link"
                class="inline-flex items-center gap-1.5 text-tertiary-700 hover:text-tertiary-800 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary-500 rounded"
              >
                <span>Read More</span>
                <span
                  aria-hidden="true"
                  class="transition-transform duration-300 group-hover:translate-x-0.5"
                  >→</span
                >
              </NuxtLink>
            </div>
          </article>
        </NuxtLink>
      </article>
    </div>
  </div>
</template>
<style scoped></style>
