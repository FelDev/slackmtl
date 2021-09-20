export default function Layout({ children, pageContext, location }) {
  console.log('@location: ', location)
  console.log('@pageContext: ', pageContext)

  return (
    <div>
      <h1>Slackmtl</h1>
      {children}
    </div>
  )
}
