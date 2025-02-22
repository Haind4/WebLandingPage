import Home from "../app/components/Home/Home";
import { footWeb, headWeb } from "../app/Constant/config_global";
import { wrapper } from "../app/Store/store";

const Index = (props) => {
  const InformationWeb = [
    {
      title: 'EVOTEK – IT solutions to Evolve Your Business',
      description: 'evotek.vn'
    }
  ]
  const url = props?.url



  return (
    <>
      {headWeb(InformationWeb, url)}
      <Home />
      {footWeb(InformationWeb)}
    </>
  )
}

export default wrapper.withRedux(Index);

export async function getServerSideProps({ req, res }) {
  const url = process?.env?.NEXT_PUBLIC_DOMAIN_BASE || req.headers.host

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {
      url: url
    },
  }
}

