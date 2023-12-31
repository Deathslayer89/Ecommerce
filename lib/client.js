import sanityClient  from "@sanity/client";
import ImageUrlBuilder from '@sanity/image-url'


export const client= sanityClient({
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset:'production',
    apiVersion:'2022-03-10',
    useCdn:false,
    token:process.env.NEXT_PUBLIC_SANITY_API_TOKEN
})

const builder=ImageUrlBuilder(client)
export const urlFor=(source)=>builder.image(source)