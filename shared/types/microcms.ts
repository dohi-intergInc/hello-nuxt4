import type { MicroCMSImage, MicroCMSListContent } from 'microcms-js-sdk'

// microCMS の型定義をここに追加してください
// MicroCMSListContent には id, createdAt, updatedAt, publishedAt, revisedAt が含まれます
// 参考: https://document.microcms.io/content-api/get-list-contents

export interface Blog extends MicroCMSListContent {
  title: string
  content: string
}

export interface Site extends MicroCMSListContent {
  image: MicroCMSImage
  title: string
  category: string[]
  date: number
  url: string
}
