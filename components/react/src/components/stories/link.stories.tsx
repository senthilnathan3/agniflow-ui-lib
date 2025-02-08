import type { Meta } from '@storybook/react'
import { Link } from '~/components/ui/link'

const meta: Meta = {
  title: 'Components/Link',
}

export default meta

export const Base = () => <Link href="https://agniflow-ui.com">Agniflow UI</Link>
