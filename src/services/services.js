
export async function getProducts() {
   return await fetch("http://localhost:3001/api/products").then(data => data.json())
};


