  let lastScrollTop = 0; // Variable to keep track of the last scroll position

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var navbar = document.getElementById("mainNavbar");
    let currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (lastScrollTop > currentScrollTop) {
      // Scrolling down
      navbar.style.top = "-50px"; // Hide navbar
    } else {
      // Scrolling up
      navbar.style.top = "0"; // Show navbar
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
  }
/*onclick h2*/
function changeImage(feature) {
    const image = document.getElementById('featureImage');
    let newSrc;
    
    switch (feature) {
      case 'feature1':
        newSrc = 'img/feature1.jpg'; // Path to image for Feature 1
        break;
      case 'feature2':
        newSrc = 'img/feature2.jpg'; // Path to image for Feature 1
        break;
      case 'feature3':
        newSrc = 'img/feature3.jpg'; // Path to image for Feature 1
        break;
      default:
        newSrc = 'img/feature1.jpg'; // Default image
    }
    
    image.src = newSrc;
  }
  

  document.querySelectorAll('.clickable').forEach((element) => {
    element.addEventListener('click', (event) => {
      changeImage(event.target.id);
    });
  });

    /*logoslide */

  var copy = document.querySelector(".logos-slide").cloneNode(true);
  document.querySelector(".logos").appendChild(copy);
