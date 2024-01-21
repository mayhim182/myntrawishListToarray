// code to extract your myntra wishlist item to an array 
const a = document.querySelector('.index-wishListContainer');
const d = []; //to store the links
const c = a.querySelectorAll('.itemcard-itemImageDiv a');
c.forEach((anchor) => d.push(anchor.getAttribute('href')));