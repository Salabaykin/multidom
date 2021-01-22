document.addEventListener("DOMContentLoaded", function() {

  $('.category-slider').slick({
    slidesToShow: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  });

  var slider = $('.footer-slider').slick({
    slidesToShow: 5,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
  });

  const showSlide = document.querySelector('.footer-slider__show'),
        hideSlide = document.querySelector('.slider-hide'),
        sliderItem = document.querySelectorAll('.footer-slider__block');

  if (showSlide && hideSlide) {
    showSlide.addEventListener('click', () => {
      sliderItem.forEach(item => {
        showSlide.style = 'display:none';
        hideSlide.style = 'display:block';
        item.style = 'height:100%';
      });
      slider.slick('refresh');
    });
  
    hideSlide.addEventListener('click', () => {
      sliderItem.forEach(item => {
        showSlide.style = 'display:block';
        hideSlide.style = 'display:none';
        item.style = 'height:150px';
      });
      slider.slick('refresh');
    });
  }

});

