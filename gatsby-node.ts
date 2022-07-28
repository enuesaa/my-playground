import { CreateWebpackConfigArgs } from 'gatsby'
import { resolve } from 'path'

export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/': resolve(__dirname, 'src/'),
      },
    },
  })
}
