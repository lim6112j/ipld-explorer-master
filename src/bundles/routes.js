import { createRouteBundle } from 'redux-bundler'
import { ExplorePage, StartExploringPage } from 'ipld-explorer-components'

export default createRouteBundle({
  '/explore*': ExplorePage,
  '/': StartExploringPage,
  '': StartExploringPage
}, { routeInfoSelector: 'selectHash' })
