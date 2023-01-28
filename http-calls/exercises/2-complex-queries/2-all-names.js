/**
 * Fill in the blanks to create a script that prints the name of all products sorted alphabetically
 */

import "./qs.js";
async function printName() {
  const query = qs.stringify(
    {
      sort: 'name:asc',
    },
    {
      encodeValuesOnly: true,
    }
  );
  console.log("The query string", query);

  // call the matching endpoint and include the querystring after the ?

  const response = await fetch(`http://localhost:1337/api/products?${query}`);
  const result = await response.json();
  result.forEach((product) => console.log(product.name));
}
printName();
