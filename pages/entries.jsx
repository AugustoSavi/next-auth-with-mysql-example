import Layout from '../components/layout'
import Container from '../components/container'
import Entries from '../components/entries'
import { useEntries } from '../lib/swr-hooks'

export default function Page () {
  const { entries, isLoading } = useEntries()

  return (
    <Layout>
      <Container>
        <Entries entries={entries} />
      </Container>
    </Layout>
  )
}
