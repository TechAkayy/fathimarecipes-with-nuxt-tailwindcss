import siteMeta from '@/site'

import { heroImageUrl } from '@/utils/hero'
import { fontUrls } from '@/utils/font'

import checkDarkTheme from '@/composables/dark-color-scheme-check?raw'
import type { Script } from '@unhead/schema'
import { useScript } from "@unhead/vue";
type TurboScript = Script & { once: true }

export const useHeadAndMeta = (pageMeta: ComputedRef) => {
  const {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    ogImageUrl: siteOgImageUrl,
    generator: siteGenerator,
    author,
    twitter,
    titleSeparator,
  } = siteMeta

  const link: any = [
    // ...[
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_Ass52Hs.woff2',
    //   '/fonts/firacode-uU9eCBsR6Z2vfE9aq3bL0fxyUs4tcw4W_D1sJVD7Ng.woff2',
    //   '/fonts/barlow-7cHpv4kjgoGqM7E_DMs5.woff2',
    // ].map(
    //   (href) =>
    //     ({
    //       rel: 'preload',
    //       as: 'font',
    //       type: 'font/woff2',
    //       crossorigin: '',
    //       href,
    //     } as const),
    // ),
    {
      rel: 'icon',
      // type: 'image/x-icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ]
  const noscript: any = []

  const canonicalUrl = pageMeta.value.canonicalUrl || siteUrl
  if (canonicalUrl) {
    // Canonical URL
    link.push({ rel: 'canonical', href: canonicalUrl.href })
  }

  if (fontUrls.length) {
    // Font preloads
    const googleapis = 'https://fonts.googleapis.com'
    const gstatic = 'https://fonts.gstatic.com'
    link.push(
      { rel: 'dns-prefetch', href: googleapis },
      { rel: 'dns-prefetch', href: gstatic },
      { rel: 'preconnect', crossorigin: 'anonymous', href: googleapis },
      { rel: 'preconnect', crossorigin: 'anonymous', href: gstatic },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href: fontUrls.toString(),
      },
    )
    noscript.push(
      `<link rel="stylesheet" crossorigin="anonymous" href="${fontUrls.toString()}" />`,
    )
  }

  const title = computed(() =>
    pageMeta.value.title
      ? `${pageMeta.value.title} ${titleSeparator} ${siteTitle}`
      : siteTitle,
  )

  // Manage head with useHead
  useHead({
    title, // title is defined statically using definePageMeta in pages and resolved here. For dynamic routes, this resolved title is further overridden within the dynamic route itself (e.g., [slug]) using a second useHead.

    // Other unused params - titleTemplate, templateParams
    titleTemplate: null,

    // Instead of setting other meta here, useServerSeoMeta is used.
    meta: [
      {
        name: 'twitter:url',
        content: canonicalUrl.href,
      },
    ],

    // useScript can also be used to load scripts
    script: [
      { innerHTML: checkDarkTheme, once: true } as TurboScript,
      {
        innerHTML: `;(function () { try { if (!document.documentElement.hasAttribute('data-pg-ia-disabled')) { window.pgia_small_mq = typeof pgia_small_mq == 'string' ? pgia_small_mq : '(max-width:767px)'; window.pgia_large_mq = typeof pgia_large_mq == 'string' ? pgia_large_mq : '(min-width:768px)'; const style = document.createElement('style'); let pgcss = 'html:not(.pg-ia-no-preview) [data-pg-ia-hide=""] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show=""] {opacity:1;visibility:visible;display:block;}'; if (document.documentElement.hasAttribute('data-pg-id') && document.documentElement.hasAttribute('data-pg-mobile')) { pgia_small_mq = '(min-width:0)'; pgia_large_mq = '(min-width:99999px)' } pgcss += '@media ' + pgia_small_mq + '{ html:not(.pg-ia-no-preview) [data-pg-ia-hide="mobile"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="mobile"] {opacity:1;visibility:visible;display:block;}}'; pgcss += '@media ' + pgia_large_mq + '{html:not(.pg-ia-no-preview) [data-pg-ia-hide="desktop"] {opacity:0;visibility:hidden;}html:not(.pg-ia-no-preview) [data-pg-ia-show="desktop"] {opacity:1;visibility:visible;display:block;}}'; style.innerHTML = pgcss; document.querySelector('head').appendChild(style); } } catch (e) { console && console.log(e); } })()`,
      } as TurboScript,
    ],
    link,
    noscript,
    htmlAttrs: { lang: 'en-US' },
    bodyAttrs: {},
    style: [],
  })

  useScript('/pgia/lib/index.js')

  const description = computed(
    () => pageMeta.value.description || siteDescription,
  )
  const generator = computed(() => pageMeta.value.generator || siteGenerator)
  const keywords = computed(() => pageMeta.value.tags?.toString())

  let siteOgImage: string = siteUrl

  try {
    siteOgImage = new URL(siteOgImageUrl, siteUrl).href
  } catch (err) {
    // console.log(err)
  }

  const ogImage = pageMeta.value.ogImage || siteOgImage || heroImageUrl

  if (ogImage.src) {
    // If pageMeta.ogImage was imported within the app, Vite returns it as an object with src, width, height etc. So, replace src with url
    ogImage.url = ogImage.src
    delete ogImage.src
  }

  // Manage head meta with useSeoMeta
  useServerSeoMeta({
    title,
    description,
    author,
    charset: 'utf-8', // defaulted by nuxt
    viewport: 'width=device-width, initial-scale=1', // defaulted by nuxt
    generator,
    keywords,

    // // Open Graph / Facebook / LinkedIn / Discord
    ogTitle: title, // set by @nuxtjs/seo's nuxt-seo-utils
    ogDescription: description, // set by @nuxtjs/seo's nuxt-seo-utils
    ogType: 'website', // set by @nuxtjs/seo's nuxt-seo-utils
    ogImage: ogImage, // set by @nuxtjs/seo's nuxt-og-image
    ogImageAlt: title, // set by @nuxtjs/seo's nuxt-og-image
    // // Other values - og:image:width, og:image:height, og:image:alt, og:image:type, og:image:secure_url
    ogUrl: canonicalUrl.href,
    ogSiteName: title,
    // // Other values - og: locale, og: type

    // // Twitter (X)
    twitterCard: 'summary_large_image', // set by @nuxtjs/seo & nuxt-og-image
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: ogImage, // set by @nuxtjs/seo & nuxt-og-image
    twitterImageAlt: title,
    twitterSite: twitter,
    twitterCreator: '@techakayy',
  })

  // Manage schema-org with useSchemaOrg
  // https://unhead.unjs.io/schema-org/getting-started/setup#_3-add-site-schemaorg
  // https://nuxtseo.com/learn/mastering-meta/schema-org#reactivity-with-useschemaorg
  useSchemaOrg([
    defineWebSite({
      name: title,
    }),
    defineWebPage(),
  ])
}
