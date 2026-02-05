import { Helmet } from 'react-helmet'

const HelmLoader = () => {
  return (
    <Helmet>
      <title>TechSolutions - IT Services & Solutions</title>
      <meta name="description" content="TechSolutions provides comprehensive IT services, cloud solutions, and software products for businesses of all sizes." />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Helmet>
  )
}

export default HelmLoader