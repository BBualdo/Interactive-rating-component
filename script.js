function toggle (selector) {
  const ratingButton = document.querySelector(selector);
  
  if (ratingButton.classList.contains('is-toggled')) {
    ratingButton.classList.remove('is-toggled');
  } else {
    turnOffPreviousButton();
    ratingButton.classList.add('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');

  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
} 

 function submitRating() {
  const ratingValue = document.querySelector('.is-toggled').innerHTML;

  const html = `
  <main>
    <section class="post-rating-page>
      <div class="post-rating-image-container">
        <img class="post-rating" src="images/illustration-thank-you.svg" alt="Thank you">
      </div>
      <div class="rating-result-container">
      <p class="rating-result">You selected ${ratingValue} out of 5</p>
      </div>
      <div class="text-container">
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
    </section>
  </main>
  `

   document.body.innerHTML = html;
 }