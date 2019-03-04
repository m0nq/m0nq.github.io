$(function () {
  $(window).load(function swapper () {
    if (window.innerWidth < 480) {
      $('.navbar-brand').text('MW');
    } else {
      $('.navbar-brand').text('Monk Wellington');
    }
  });

  $(window).resize(function () {
    if (window.innerWidth < 480) {
      $('.navbar-brand').text('MW');
    } else {
      $('.navbar-brand').text('Monk Wellington');
    }
  });

  $('a').click(function (e) {
    var $section = $(this).context.innerText;
    var $body = $('html, body');
    switch ($section) {
      case 'Web':
      case 'Video':
      case 'Audio':
      case 'About':
        e.preventDefault();
        $body.animate({
          scrollTop: $('#' + $section.toLowerCase()).offset().top - 80
        }, 600);
        break;
      case 'Monk Wellington':
        e.preventDefault();
        $body.animate({
          scrollTop: $('#top').offset().top
        }, 600);
        break;
    }
  });

  // $('.modal').modal({
  //   backdrop: true,
  //   keyboard: true,
  //   show: false
  // });

  // register a listener on #phcModal, click button, and 'x' for when clicked, it stops the iframe video from playing
});
