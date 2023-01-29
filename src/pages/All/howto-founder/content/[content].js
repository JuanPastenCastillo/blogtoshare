const Dinamyc = (props) => {
  // console.log("props:", props)
  const { post, originalTitle, source, title } = props.query

  return (
    <div>
      <h2>{title}</h2>
      <p>Post number: {post}</p>
      <p>
        Source:{" "}
        <a
          href={source}
          target="_blank"
          rel="noreferrer">
          «{originalTitle}{" "}
        </a>{" "}
      </p>
    </div>
  )
}
export default Dinamyc

export const getServerSideProps = (context) => {
  const { query } = context
  return {
    props: {
      query: query
    }
  }
}
