"use client"
import { useEffect, useState } from "react"
import InstaGrid from "./instaGrid"

export interface Instaltem {
  permalink: string
  mediaUrl: string
}

const Instafeed = () => {
  const [instaltems, setInstaItems] = useState<Instaltem[]>([])
  const userId = process.env.NEXT_PUBLIC_ACCESS_USER_ID
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_INSTA_CODE
  const instaUrl = `https://graph.instagram.com/${userId}/media?access_token=${accessToken}`
  useEffect(() => {
    const fetchMedia = async (id: string) => {
      const mediaUrl = `https://graph.instagram.com/${id}?access_token=${accessToken}&fields=media_url,permalink`

      try {
        const res = await fetch(mediaUrl)
        if (!res.ok) {
          throw new Error(`Failed to fetch media for ID ${id}`)
        }

        const json = await res.json()

        const instaltem: Instaltem = {
          permalink: json.permalink,
          mediaUrl: json.media_url,
        }
        return instaltem
      } catch (error) {
        console.error("Error fetching media:", error)
        throw error // Rethrow the error to propagate it to the caller
      }
    }

    const doFetch = async () => {
      if (!userId || !accessToken) {
        return
      }

      try {
        const res = await fetch(instaUrl)
        if (!res.ok) {
          throw new Error("Failed to fetch Instagram data")
        }

        const json = (await res.json()).data
        const fetchedItems: Instaltem[] = []

        for (let i = 0; i < json?.length && i < 6; i++) {
          const item = json[i]
          const itemId = item.id
          const instaltem = await fetchMedia(itemId)
          fetchedItems.push(instaltem)
        }

        setInstaItems(fetchedItems)
      } catch (error) {
        console.error("Error fetching Instagram data:", error)
      }
    }

    doFetch()
  }, [userId, accessToken, instaUrl])

  return (
    <div className="small:content-container-tablet medium:content-container  mb-8 mt-20 small:mt-0">
      <div className="uppercase text-center mb-7 font-medium tracking-[2.52px]">
        follow us on instagram
      </div>
      <div>
        <InstaGrid items={instaltems} />
      </div>
    </div>
  )
}
export default Instafeed
