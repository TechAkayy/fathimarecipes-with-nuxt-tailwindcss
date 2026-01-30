<script setup lang="ts">
  import { apply, setAttr } from '@directus/visual-editing'

  const { footer } = defineProps({
    footer: {
      type: Object,
      required: true,
    },
  })

  const directusUrl: string = import.meta.env.VITE_DIRECTUS_URL

  onMounted(() => {
    const elements = document.querySelector('#footer')
    apply({
      elements,
      directusUrl,
    })
  })
</script>
<template>
  <footer id="footer" class="bg-primary-100 py-12 px-4 md:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <h3
            class="font-serif text-2xl text-primary-800"
            :data-directus="
              setAttr({
                collection: 'footer',
                item: footer.id,
                fields: 'brand_name',
                mode: 'popover',
              })
            "
          >
            {{ (footer.brand_name && footer.brand_name) || 'Fathima Recipe' }}
          </h3>
          <p
            class="text-neutral-600"
            :data-directus="
              setAttr({
                collection: 'footer',
                item: footer.id,
                fields: 'description',
                mode: 'popover',
              })
            "
          >
            {{
              (footer.description && footer.description) ||
              'Sharing delicious recipes and culinary adventures with food lovers worldwide.'
            }}
          </p>
          <div class="flex space-x-4">
            <NuxtLink
              :to="
                (footer.social_facebook_url && footer.social_facebook_url) ||
                '#'
              "
              class="text-primary-600 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              :data-directus="
                setAttr({
                  collection: 'footer',
                  item: footer.id,
                  fields: 'social_facebook_url',
                  mode: 'popover',
                })
              "
            >
              <span class="sr-only">Facebook</span>
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xml:space
                fill="currentColor"
                stroke
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              :to="
                (footer.social_instagram_url && footer.social_instagram_url) ||
                '#'
              "
              class="text-primary-600 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              :data-directus="
                setAttr({
                  collection: 'footer',
                  item: footer.id,
                  fields: 'social_instagram_url',
                  mode: 'popover',
                })
              "
            >
              <span class="sr-only">Instagram</span>
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xml:space
                fill="currentColor"
                stroke
              >
                <path
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                />
              </svg>
            </NuxtLink>
            <NuxtLink
              :to="
                (footer.social_pinterest_url && footer.social_pinterest_url) ||
                '#'
              "
              class="text-primary-600 hover:text-primary-800 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 rounded"
              :data-directus="
                setAttr({
                  collection: 'footer',
                  item: footer.id,
                  fields: 'social_pinterest_url',
                  mode: 'popover',
                })
              "
            >
              <span class="sr-only">Pinterest</span>
              <svg
                class="h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xml:space
                fill="currentColor"
                stroke
              >
                <path
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                />
              </svg>
            </NuxtLink>
          </div>
        </div>
        <div>
          <h4
            class="font-serif text-lg mb-4 text-primary-800"
            :data-directus="
              setAttr({
                collection: 'footer',
                item: footer.id,
                fields: 'quick_links_heading',
                mode: 'popover',
              })
            "
          >
            {{
              (footer.quick_links_heading && footer.quick_links_heading) ||
              'Quick Links'
            }}
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                :to="
                  (footer.quick_link_home_url && footer.quick_link_home_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'quick_link_home_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'quick_link_home_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.quick_link_home_label &&
                      footer.quick_link_home_label) ||
                    'Home'
                  }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="
                  (footer.quick_link_recipes_url &&
                    footer.quick_link_recipes_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'quick_link_recipes_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'quick_link_recipes_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.quick_link_recipes_label &&
                      footer.quick_link_recipes_label) ||
                    'Recipes'
                  }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="
                  (footer.quick_link_about_url &&
                    footer.quick_link_about_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'quick_link_about_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'quick_link_about_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.quick_link_about_label &&
                      footer.quick_link_about_label) ||
                    'About'
                  }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="
                  (footer.quick_link_contact_url &&
                    footer.quick_link_contact_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'quick_link_contact_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'quick_link_contact_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.quick_link_contact_label &&
                      footer.quick_link_contact_label) ||
                    'Contact'
                  }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4
            class="font-serif text-lg mb-4 text-primary-800"
            :data-directus="
              setAttr({
                collection: 'footer',
                item: footer.id,
                fields: 'categories_heading',
                mode: 'popover',
              })
            "
          >
            {{
              (footer.categories_heading && footer.categories_heading) ||
              'Recipe Categories'
            }}
          </h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                :to="
                  (footer.category_main_dishes_url &&
                    footer.category_main_dishes_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'category_main_dishes_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'category_main_dishes_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.category_main_dishes_label &&
                      footer.category_main_dishes_label) ||
                    'Main Dishes'
                  }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="
                  (footer.category_desserts_url &&
                    footer.category_desserts_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'category_desserts_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'category_desserts_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.category_desserts_label &&
                      footer.category_desserts_label) ||
                    'Desserts'
                  }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="
                  (footer.category_healthy_options_url &&
                    footer.category_healthy_options_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'category_healthy_options_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'category_healthy_options_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.category_healthy_options_label &&
                      footer.category_healthy_options_label) ||
                    'Healthy Options'
                  }}
                </span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="
                  (footer.category_quick_easy_url &&
                    footer.category_quick_easy_url) ||
                  '#'
                "
                class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'category_quick_easy_url',
                    mode: 'popover',
                  })
                "
              >
                <span
                  :data-directus="
                    setAttr({
                      collection: 'footer',
                      item: footer.id,
                      fields: 'category_quick_easy_label',
                      mode: 'popover',
                    })
                  "
                >
                  {{
                    (footer.category_quick_easy_label &&
                      footer.category_quick_easy_label) ||
                    'Quick & Easy'
                  }}
                </span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4
            class="font-serif text-lg mb-4 text-primary-800"
            :data-directus="
              setAttr({
                collection: 'footer',
                item: footer.id,
                fields: 'contact_heading',
                mode: 'popover',
              })
            "
          >
            {{
              (footer.contact_heading && footer.contact_heading) || 'Contact Us'
            }}
          </h4>
          <ul class="space-y-2 text-neutral-600">
            <li>
              <span class="font-semibold text-neutral-700">Email:</span>
              <span
                class="ml-1"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'email',
                    mode: 'popover',
                  })
                "
              >
                {{
                  (footer.email && footer.email) || 'hello@fathimarecipe.com'
                }}
              </span>
            </li>
            <li>
              <span class="font-semibold text-neutral-700">Phone:</span>
              <span
                class="ml-1"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'phone',
                    mode: 'popover',
                  })
                "
              >
                {{ (footer.phone && footer.phone) || '+1 (555) 123-4567' }}
              </span>
            </li>
            <li>
              <span class="font-semibold text-neutral-700">Address:</span>
              <span
                class="ml-1"
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'address',
                    mode: 'popover',
                  })
                "
              >
                {{
                  (footer.address && footer.address) ||
                  '123 Culinary Ave, Flavor Town'
                }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-primary-200">
        <div
          class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p
            class="text-neutral-600"
            :data-directus="
              setAttr({
                collection: 'footer',
                item: footer.id,
                fields: 'copyright',
                mode: 'popover',
              })
            "
          >
            {{
              (footer.copyright && footer.copyright) ||
              '© 2024 Fathima Recipe. All rights reserved.'
            }}
          </p>
          <div class="flex space-x-6">
            <NuxtLink
              :to="
                (footer.privacy_policy_url && footer.privacy_policy_url) || '#'
              "
              class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
              :data-directus="
                setAttr({
                  collection: 'footer',
                  item: footer.id,
                  fields: 'privacy_policy_url',
                  mode: 'popover',
                })
              "
            >
              <span
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'privacy_policy_label',
                    mode: 'popover',
                  })
                "
              >
                {{
                  (footer.privacy_policy_label &&
                    footer.privacy_policy_label) ||
                  'Privacy Policy'
                }}
              </span>
            </NuxtLink>
            <NuxtLink
              :to="
                (footer.terms_of_service_url && footer.terms_of_service_url) ||
                '#'
              "
              class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
              :data-directus="
                setAttr({
                  collection: 'footer',
                  item: footer.id,
                  fields: 'terms_of_service_url',
                  mode: 'popover',
                })
              "
            >
              <span
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'terms_of_service_label',
                    mode: 'popover',
                  })
                "
              >
                {{
                  (footer.terms_of_service_label &&
                    footer.terms_of_service_label) ||
                  'Terms of Service'
                }}
              </span>
            </NuxtLink>
            <NuxtLink
              :to="
                (footer.cookie_policy_url && footer.cookie_policy_url) || '#'
              "
              class="text-neutral-600 hover:text-primary-800 transition-colors duration-200"
              :data-directus="
                setAttr({
                  collection: 'footer',
                  item: footer.id,
                  fields: 'cookie_policy_url',
                  mode: 'popover',
                })
              "
            >
              <span
                :data-directus="
                  setAttr({
                    collection: 'footer',
                    item: footer.id,
                    fields: 'cookie_policy_label',
                    mode: 'popover',
                  })
                "
              >
                {{
                  (footer.cookie_policy_label && footer.cookie_policy_label) ||
                  'Cookie Policy'
                }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
