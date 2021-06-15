const url = 'http://localhost:3001/api/products/';

//info Fetch => https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

export async function getProducts() {
   return await fetch(url).then(data => data.json())
};

export async function updateProduct(product) {
   const option = {
      method: 'PUT',
      // mode: 'cors',
      // cache: 'no-cache',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
   };
   return await fetch(url, option)
      .then(response => response.json())
      .then(data => {
         console.log('Success:', data);
      })
      .catch((error) => {
         console.error('Error:', error);
      });

}

export async function addProduct(product) {
   const option = {
      method: "POST",
      // mode: 'cors',
      // cache: 'no-cache',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
   };
   return await fetch(url, option)
      .then(response => response.json())
      .then(data => {
         console.log('Success:', data);
      })
      .catch((error) => {
         console.error('Error:', error);
      });

}

export async function deleteProduct(sku) {
   const option = {
      method: "DELETE",
      headers: {
         'Content-Type': 'application/json'
      }
   };
   return await fetch(url + sku, option)
      .then(response => response.json())
      .then(data => {
         console.log('Success:', data);
      })
      .catch((error) => {
         console.error('Error:', error);
      });

}


