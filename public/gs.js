window.dataLayer = window.dataLayer || []
function gtag() {
  dataLayer.push(arguments)
}
gtag('js', new Date())
gtag('config', '${GA_TRACKING_ID}', {
  page_path: window.location.pathname,
})
