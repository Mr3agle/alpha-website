import * as React from "react"

export default class ScrollToTop extends React.Component {

  componentDidMount(){
    window.addEventListener("scroll", this.toggleVisibility)
  }
  componentWillUnmount(){
    window.addEventListener("scroll", this.toggleVisibility)
  }

  toggleVisibility() {

    if (window.scrollY <= 500) {

      document.querySelector(".toTopBtn").classList.add("hideToTopBtn")

    } else {

      document.querySelector(".toTopBtn").classList.remove("hideToTopBtn")
      document.querySelector(".toTopBtn").classList.add("showToTopBtn")

    }

  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  render() {
    return (
      <div className="toTopBtn">
        <div
          onClick={() => this.scrollToTop()}
          role="button"
          aria-label="toTopBtn"
          tabIndex="-1"
          onKeyPress={() => this.scrollToTop()}
        >
          <i className="bx bxs-chevron-up" />
        </div>
      </div>
    )
  }
}
