import hljs from 'highlight.js'
require('zoom.js')
require('./zoom/transition.js')
require('slick-carousel')

const $ = window.jQuery

$(() => {
  $('#slider').slick({
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    }]
  })

  hljs.initHighlightingOnLoad()
})
