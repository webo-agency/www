import { defineNitroPlugin } from 'nitropack/runtime'

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('sitemap:resolved', (ctx) => {
        ctx.urls = ctx.urls.map((url) => {
            if (Array.isArray(url.images) && url.images.length) {
                url.images = url.images.map((img) => {
                    let url = img.loc.toString()
                    img.loc = url.replace(/&amp;/g, '%26')
                    console.log(img.loc)
                    return img
                })
            }
            return url
        })
    })
})