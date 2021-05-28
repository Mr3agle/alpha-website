import * as React from "react"

const ScrollToTop = () => {

  const [show, setShow] = React.useState(false)

  const toggleVisibility = () => {

    if (window.scrollY <= 500) {
      setShow(false)

    } else {
      setShow(true)
    }

  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  React.useEffect(() => {
    // const abortController = new AbortController()
    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  })

  return (
    <div className={show ? 'toTopBtn showTotopBtn' : 'toTopBtn hideToTopBtn'}>
      <div
        onClick={() => scrollToTop()}
        role="button"
        aria-label="toTopBtn"
        tabIndex="-1"
        onKeyPress={() => scrollToTop()}
      >
        <i className="bx bxs-chevron-up" />
      </div>
    </div>
  )

}

export default ScrollToTop