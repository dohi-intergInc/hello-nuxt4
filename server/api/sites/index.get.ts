import type { Site } from '~~/shared/types/microcms'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { client } = useMicroCMS()

  return await client.getList<Site>({
    endpoint: 'sites',
    queries: {
      limit: Number(query.limit) || 10,
      filters: 'category[contains]サービス',
      offset: Number(query.offset) || 0,
    },
  })
})
