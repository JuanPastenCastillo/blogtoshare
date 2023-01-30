import { BackComponent } from "../../../../../components/back/BackComponent"

const Dinamyc = (props) => {
  const { post, originalTitle, source, title } = props.query

  return (
    <div>
      <BackComponent/>
      
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


/* 
!FH
Add a button or arrow or something to back to previous page




*/