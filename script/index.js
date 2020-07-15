$(document).ready(function () {
  $('.header__serch-cat').mouseenter(function () {
    $('.header__search-cat-body').slideDown(300);
  });
  $('.header__serch-cat').mouseleave(function () {
    $('.header__search-cat-body').slideUp(300);
  });
  $('.header__unit-head--cat').click(function () {
    $(this).next().slideToggle(300);
    $('.unit-burger').toggleClass('active');
  });
  $('.header__unit--help').mouseenter(function () {
    $('.header__unit-body').not(this).slideUp(0);
    $('.header__unit-body--help').slideDown(300);
  });
  $('.header__unit--help').mouseleave(function () {
    $('.header__unit-body--help').slideUp(0);
  });
  $('.header__unit--usd').mouseenter(function () {
    $('.header__unit-body').not(this).slideUp(0);
    $('.header__unit-body--usd').slideDown(300);
  });
  $('.header__unit--usd').mouseleave(function () {
    $('.header__unit-body--usd').slideUp(0);
  });
  $('.header__unit--language').mouseenter(function () {
    $('.header__unit-body--lang').slideDown(300);
  });
  $('.header__unit--language').mouseleave(function () {
    $('.header__unit-body--lang').slideUp(0);
  });
  $('.intro__slider').slick({
    dots: true,
    infinite: true,
    slideToShow: 1,
  });
  $('.buy__nav-item-head').click(function () {
    $('.buy__nav-item-head').not(this).removeClass('active');
    $(this).toggleClass('active');
    $('.buy__nav-item-body').not($(this).next()).removeClass('active');
    $(this).next().toggleClass('active');
  });
  $(function () {
    let filter = $('[data-filter]');
    filter.on('click', function (event) {
      event.preventDefault();
      let cat = $(this).data('filter');
      if (cat == 'all') {
        $('[data-cat]').removeClass('hide');
      } else {
        $('[data-cat]').each(function () {
          let workCat = $(this).data('cat');
          if (workCat != cat) {
            $(this).addClass('hide');
          } else {
            $(this).removeClass('hide');
          }
        });
      }
    });
  })
});