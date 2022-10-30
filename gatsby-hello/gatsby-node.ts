import { CreateWebpackConfigArgs } from 'gatsby'
import { resolve } from 'path'

export const onCreateWebpackConfig = ({ actions }: CreateWebpackConfigArgs) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@/components': resolve(__dirname, 'src/components'),
        '@/pages': resolve(__dirname, 'src/pages'),
      },
    },
  })
}
