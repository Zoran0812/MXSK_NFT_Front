import { Route } from 'react-router-dom'
import Layout from './components/Layout'

export const PublicRoute = (props: any) => {
  return (
    <Layout>
      <Route {...props} />
    </Layout>
  )
}

export const PrivateRoute = (props: any) => {
  return (
    <Layout>
      <Route {...props} />
    </Layout>
  )
}
