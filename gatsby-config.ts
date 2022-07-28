module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@/components': 'src/components',
          '@/pages': 'src/pages',
        },
        extensions: ['ts', 'tsx'],
      },
    },
  ],
}
