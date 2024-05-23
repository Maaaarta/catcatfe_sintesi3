bulmaCarousel.attach("#slider", {
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true
  });
  
  const links = document.querySelectorAll('.navbar-item');

  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) { 
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  
    // clic volver al inicio
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  


  

