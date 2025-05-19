import type { LastFmImage } from '@/types/lastfm'

export const getImageUrl = (images: LastFmImage[]): string => {
  return (
    images.find((i) => i.size === 'extralarge' && i['#text'])?.['#text'] ||
    images.find((i) => i.size === 'large' && i['#text'])?.['#text'] ||
    images.find((i) => i.size === 'medium' && i['#text'])?.['#text'] ||
    images.find((i) => i['#text'])?.['#text'] ||
    ''
  )
}
