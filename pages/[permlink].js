import { useAmp } from 'next/amp';

export default function Post({permlink}) {
  const isAmp = useAmp();

  return (
    <>
      <h1>{isAmp ? 'AMP' : 'Non AMP'}</h1>
      <p>{permlink}</p>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: [{ params: { permlink: 'test' } }],
    fallback: false,
  };
}

export function getStaticProps(props) {
  console.log(props.params);
  const {permlink} = props.params
  return { props: {permlink} };
}

export const config = { amp: 'hybrid' };
