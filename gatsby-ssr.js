import Layout from './src/components/layout'

export function wrapPageElement({ element, props }) {
  return (
    <Layout pageContext={props.pageContext} location={props.location}>
      {element}
    </Layout>
  )
}
