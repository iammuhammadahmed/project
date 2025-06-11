const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
const catCards = document.querySelector(".cat-cards");

leftBtn.addEventListener("click", () => {
  catCards.scrollBy({ left: -200, behavior: "smooth" });
});

rightBtn.addEventListener("click", () => {
  catCards.scrollBy({ left: 200, behavior: "smooth" });
});




  const brandCardsContainer = document.querySelector('.brand-cards');
  const btnLeft = document.querySelector('.b1 .left');
  const btnRight = document.querySelector('.b1 .right');

  const scrollAmount = 270; // adjust based on card width + gap

  btnLeft.addEventListener('click', () => {
    brandCardsContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  btnRight.addEventListener('click', () => {
    brandCardsContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });


  // Select only the category buttons inside the products section
  const productSection = document.querySelector('.products');
  const filterLinks = productSection.querySelectorAll('.cat-buttons.links a');
  const productCards = productSection.querySelectorAll('.product-card');

  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = ''; // or 'block' if using block layout
        } else {
          card.style.display = 'none';
        }
      });

      // Optional: update active state
      filterLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const bestSelling = document.querySelector('.best-selling-products');
    const productCards = bestSelling.querySelector('.product-cards');
    const leftBtn = bestSelling.querySelector('.left');
    const rightBtn = bestSelling.querySelector('.right');

    const scrollAmount = 300; // Adjust scroll amount (pixels)

    leftBtn.addEventListener('click', () => {
      productCards.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
      productCards.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form form');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default submission

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subscribed = document.getElementById('checkbox').checked;

      if (!name || !email) {
        alert("Please fill in all required fields.");
        return;
      }

      // Optional: You could also validate email format here manually if needed

      alert(`Thank you ${name}! Your email ${email} has been submitted.` +
        (subscribed ? " You are subscribed to the newsletter." : ""));

      // Reset form
      form.reset();
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".product-cards");
    const btnLeft = document.querySelector(".left");
    const btnRight = document.querySelector(".right");

    btnLeft.addEventListener("click", () => {
      container.scrollBy({
        left: -300, // pixels to scroll left
        behavior: "smooth"
      });
    });

    btnRight.addEventListener("click", () => {
      container.scrollBy({
        left: 300, // pixels to scroll right
        behavior: "smooth"
      });
    });
  });

