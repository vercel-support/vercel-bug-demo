import { useAmp } from 'next/amp';
import Image from 'next/image';

export default function Post({permlink}) {
  const isAmp = useAmp();

  return (
    <>
      <h1>{isAmp ? 'AMP' : 'Non AMP'}</h1>
      <p>{permlink}</p>
      {!isAmp && <Image alt="Example image" src="https://cdn.truvvle.com//fill/400/100/sm/1/aHR0cHM6Ly9pbWcudHJhdmVsZmVlZC5pby9qcHBob3RvZ3JhcGh5JTJGMjAyMDExMjBUMTAyNzA3NzQ1Wi1qcGluYXNpYWxvZ28ucG5n" width={400} height={100} />}
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
