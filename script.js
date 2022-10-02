function scollToCenter(sectionId) {
    const element = document.querySelector(`#${sectionId}`)
    const topPos = element.getBoundingClientRect().top + window.pageYOffset

    window.scrollTo({
      top: topPos, // scroll so that the element is at the top of the view
      behavior: 'smooth' // smooth scroll
    })
}

function scollToTop(sectionId) {
    const element = document.querySelector(`#${sectionId}`)
    const rect = element.getBoundingClientRect() // get rects(width, height, top, etc)
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    
    window.scroll({
      top: rect.top + rect.height / 2 - viewHeight / 2,
      behavior: 'smooth' // smooth scroll
    });
}