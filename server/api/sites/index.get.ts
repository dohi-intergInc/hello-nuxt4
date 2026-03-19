import type { Site } from '~~/shared/types/microcms'

export default defineEventHandler(async () => {
  // const query = getQuery(event)
  const { client } = useMicroCMS()

  return await client.getList<Site>({
    endpoint: 'sites',
    queries: {
    },
  })
})
