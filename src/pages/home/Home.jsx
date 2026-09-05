import HomeBanner from '../../components/home/HomeBanner.jsx'
import HomeAbout from '../../components/home/HomeAbout.jsx'
import HomeServices from '../../components/home/HomeServices.jsx'
import HomeGallery from '../../components/home/HomeGallery.jsx'
import HomeReviews from '../../components/home/HomeReviews.jsx'

export default function HomePage() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <HomeGallery />
      <HomeReviews />
    </>
  )
}
