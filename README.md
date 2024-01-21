goto myntra wishlist page paste the below code array d is ur wishlist
```
// code to extract your myntra wishlist item to an array 
const a = document.querySelector('.index-wishListContainer');
const d = []; //to store the links
const c = a.querySelectorAll('.itemcard-itemImageDiv a');
c.forEach((anchor) => d.push(anchor.getAttribute('href')));

```
<img width="688" alt="image" src="https://github.com/mayhim182/myntrawishListToarray/assets/127026126/14b2acd9-4978-4722-94ef-b4cf91805071">
