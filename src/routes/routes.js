export function getHomePageRoute() {
  return `/`
}

export function getAboutPageRoute() {
  return `/about-us`
}

export function getServicesPageRoute() {
  return `/services`
}

export function getServiceDetailPageRoute(slug = ':slug') {
  return `/services/${slug}`
}

export function getContactPageRoute() {
  return `/contact`
}

export function getQuotePageRoute() {
  return `/get-a-quote`
}

export function getBlogPageRoute() {
  return `/blog`
}
