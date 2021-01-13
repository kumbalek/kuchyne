export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fff22b2b5b90a01259d89a6',
                  title: 'Sanity Studio',
                  name: 'kuchyne-studio',
                  apiId: 'a8fddab4-9c99-44ed-8abe-719179bed2f0'
                },
                {
                  buildHookId: '5fff22b38df236015e7f018b',
                  title: 'Blog Website',
                  name: 'kuchyne-web',
                  apiId: '94e9ff65-0aed-4d7c-97a6-710b5ddacd30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kumbalek/kuchyne',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kuchyne-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
