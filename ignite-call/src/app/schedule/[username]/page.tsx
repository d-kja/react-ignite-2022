import Schedule from '@/components/client-side/pages/schedule'
import { Metadata, ResolvingMetadata } from 'next'

type MetadataProps = {
  params: { username: string }
}

export async function generateMetadata(
  { params }: MetadataProps,
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const username = params.username

  const previousImages = (await parent)?.openGraph?.images || []

  return {
    title: `Agendar com ${username} | Ignite Call`,
    robots: {
      index: true,
      nocache: true,
    },
    openGraph: {
      images: previousImages,
    },
  }
}

const Page = () => {
  return <Schedule />
}

export default Page
