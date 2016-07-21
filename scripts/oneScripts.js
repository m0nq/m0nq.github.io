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

$('a')[0].addEventListener('click', function (e) {
  e.preventDefault();
  var $top = $('#top').offset().top
  $('html, body').animate({
    scrollTop: $top
  }, 800);
});

$('a')[1].addEventListener('click', function (e) {
  e.preventDefault();
  var $about = $('#about').offset().top - 80
  $('html, body').animate({
    scrollTop: $about
  }, 800);
});

$('a')[2].addEventListener('click', function (e) {
  e.preventDefault();
  var $projects = $('#projects').offset().top - 80
  $('html, body').animate({
    scrollTop: $projects
  }, 800);
});
