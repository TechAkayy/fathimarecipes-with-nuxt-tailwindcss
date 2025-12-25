<script setup lang="ts">
  import { WP_REST_API_POST } from 'wp-types'

  const route = useRoute()

  definePageMeta({
    // layout: 'default',
    // name: 'slug',
    // alias: 'slug',
    title: 'Slug',
    description: 'Slug',
    // hidden: true,
    navOrder: '3',
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })

  // import { computed } from 'vue'
  // import { useArticles } from '~/composables/articles'

  // const articleId = useRoute().params.id

  // const { data: article } = await useAsyncData('articles', async () => {
  // 	const { getArticle } = useArticles()
  // 	return await getArticle(+articleId)
  // })

  const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1)) || ''
  useServerSeoMeta({
    description: () => capitalize(route.params.slug),
  })
  useHead({
    title: () => capitalize(route.params.slug),
  })
  const title = capitalize(route.params.slug).replaceAll('-', ' ')

  const slug = useRoute().params.slug.toString()
  const postId = useRoute().query.id
  /* Auto-generated logic by Vue Designer Headless Wordpress 6.7 begins */
  const {
    getPgWordpressPost,
    getPgWordpressComments,
    getPgWordpressAttachment,
  } = usePgWordpressData()
  const pgData: any = {
    pgWordpressData: {},
  }

  const pgPostArgs = { post: { filters: { id: postId, _embed: 'true' } } }

  pgData.pgWordpressData.post = {
    ...pgPostArgs.post,
    data: await getPgWordpressPost(pgPostArgs.post),
  }

  const pgPost = pgData.pgWordpressData.post.data

  // const pgAttachmentArgs = {
  //   attachment: { filters: { id: pgPost.featured_media } },
  // }

  // pgData.pgWordpressData.attachment = {
  //   ...pgAttachmentArgs.attachment,
  //   data: await getPgWordpressAttachment(pgAttachmentArgs.attachment),
  // }

  // const pgAttachment = pgData.pgWordpressData.attachment.data
  /* Auto-generated logic by Vue Designer Headless Wordpress 6.7 ends */

  // pgAttachment.source_url = `${import.meta.env.VITE_WORDPRESS_URL}${pgAttachment.source_url}`

  // pgPost.content.rendered = pgPost.content.rendered.replaceAll(
  //   '/wp-content/',
  //   `${import.meta.env.VITE_WORDPRESS_URL}/wp-content/`,
  // )

  const newComment = reactive({
    name: '',
    email: '',
    comment: '',
  })

  const postedComment = ref()

  const postComment = async () => {
    postedComment.value = await $fetch(
      `https://fathimareci.com/wp-json/v2/comments`,
      {
        method: 'POST',
        body: newComment,
      },
    )
  }
</script>
<template>
  <div>
    <article
      v-if="pgPost"
      class="max-w-4xl mx-auto px-4 py-12"
      data-pg-comments
      data-pg-post
      data-pg-attachment
    >
      <div class="space-y-8">
        <!-- Featured Image -->
        <img
          alt="Homemade Pasta Dish"
          class="w-full h-[500px] object-cover rounded-lg shadow-lg"
          :src="pgPost._embedded['wp:featuredmedia'][0].source_url"
        />
        <!-- Article Header -->
        <header class="space-y-4">
          <h1
            class="font-serif text-4xl md:text-5xl text-primary-800 leading-tight"
            v-html="pgPost.title.rendered"
          ></h1>
          <div class="flex items-center space-x-4 text-sm text-gray-600">
            <time>{{ pgPost.dateDisplay }}</time>
          </div>
          <!-- Categories and Tags -->
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(category, index) in pgPost._embedded['wp:term'][0]"
              :key="index"
              class="px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm"
              >{{ category.name }}</span
            >
          </div>
        </header>
        <!-- Article Excerpt -->
        <!-- Article Content -->
        <div class="max-w-none prose prose-lg dark:prose-invert">
          <div v-html="pgPost.content.rendered"></div>
        </div>
      </div>
    </article>
  </div>
</template>
