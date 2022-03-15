import { gql } from '@apollo/client';
import client from '../apollo-client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        hello
      }
    `,
  });
  return { props: { data: data.hello } };
}

const Home = ({ data }) => {
  return (
    <div>
      <h1>Home</h1>
      <div>{data}</div>
    </div>
  );
};

export default Home;
