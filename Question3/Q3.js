// 3. Build a feature for Store's Inventory.

// Original prices in USD
const pricesInUSD = {
    apple: 10,
    banana: 5,
    orange: 7,
    mango: 12
  };
  
  // Exchange rate: 1 USD = 80 INR
  const exchangeRate = 80;
  
  // Convert prices to INR using map()
  const pricesInINR = Object.fromEntries(
    Object.entries(pricesInUSD).map(([item, price]) => [item, price * exchangeRate])
  );
  
  console.log(pricesInINR);

  