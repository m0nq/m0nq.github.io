$(function () {
  $(window).load(function swapper() {
    if (window.innerWidth < 480) {
      $('.navbar-brand').text("MW");
    } else {
      $('.navbar-brand').text("Monk Wellington");
    }
  });

  $(window).resize(function () {
    if (window.innerWidth < 480) {
      $('.navbar-brand').text("MW");
    } else {
      $('.navbar-brand').text("Monk Wellington");
    }
  });

  $('a').click(function (e) {
    e.preventDefault();
    var $section = $(this).context.innerText;
    switch ($section) {
      case 'Web':
      case 'Video':
      case 'Audio':
      case 'About':
        $('html, body').animate({
          scrollTop : $('#' + $section.toLowerCase()).offset().top - 80
        }, 600);
        break;
      case 'Monk Wellington':
        $('html, body').animate({
          scrollTop : $('#top').offset().top - 80
        }, 600);
        break;
    }
  });
});
