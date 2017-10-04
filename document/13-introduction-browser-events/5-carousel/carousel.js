var currentPage = 0;

function moveCarouselForward() {
  carouselPages[currentPage].hidden = true;

  currentPage++;
  if (currentPage >= carouselPages.length) currentPage = 0;

  carouselPages[currentPage].hidden = false;
}

function moveCarouselBackward() {
  carouselPages[currentPage].hidden = true;

  currentPage--;
  if (currentPage < 0) currentPage = carouselPages.length - 1;

  carouselPages[currentPage].hidden = false;
}

carouselPages = document.querySelectorAll('.carousel ul li');
buttonBackward = document.querySelector('.carousel .arrow-backward');
buttonForward = document.querySelector('.carousel .arrow-forward');

for (var i = 0; i < carouselPages.length; i++) carouselPages[i].hidden = true;
carouselPages[currentPage].hidden = false;

buttonForward.addEventListener('click', moveCarouselForward);
buttonBackward.addEventListener('click', moveCarouselBackward);
