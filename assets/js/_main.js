/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  /* Sticky footer */
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);

  /* FitVids init */
  $("#main").fitVids();

  /* init sticky sidebar */
  $(".sticky").Stickyfill();

  var stickySideBar = function(){
    /* Icons always visible - clear inline styles so CSS controls display */
    $(".author__urls").css("display", "");
  };

  stickySideBar();

  $(window).resize(function(){
    stickySideBar();
  });

  /* Follow menu drop down */
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  /* init smooth scroll */
  $("a").smoothScroll({offset: -20});

  /* add lightbox class to all image links */
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  /* Magnific-Popup options */
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1]
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500,
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true
  });

});
