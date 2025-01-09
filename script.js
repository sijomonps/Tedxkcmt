// For multiple elements
const paragraphs = document.querySelectorAll('.paragraph');

paragraphs.forEach(paragraph => {
  observer.observe(paragraph);
});