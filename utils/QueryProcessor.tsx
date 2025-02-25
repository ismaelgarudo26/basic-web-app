
export default function QueryProcessor(query: string): string {
  console.log("Deployment test");

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ismael garudo"; 
  }

  if (query.toLowerCase() === "what is your andrew id?") {
    return "igarudo"; 
  }

  // Function to return the largest number
  if (query.toLowerCase().includes("largest")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers === null) {
      return "No Match";
    }
    const largest = Math.max(...numbers.map(Number));
    return largest.toString();
  }

  // Function to return the smallest number
  if (query.toLowerCase().includes("smallest")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers === null) {
      return "No Match";
    }
    const smallest = Math.min(...numbers.map(Number));
    return smallest.toString();
  }

  // Function for addition
  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers === null) {
      return "No Match";
    }
    const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    return sum.toString();
  }

  // Function for subtraction
  if (query.toLowerCase().includes("minus")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers === null || numbers.length < 2) {
      return "No Match";
    }
    const difference = parseInt(numbers[0]) - parseInt(numbers[1]);
    return difference.toString();
  }

  // Function for multiplication (handles both "multiplied by" and "times")
  if (query.toLowerCase().includes("multiplied by") || query.toLowerCase().includes("times")) {
    const numbers = query.match(/-?\d+/g);
    if (numbers === null || numbers.length < 2) {
      return "No Match";
    }
    const product = parseInt(numbers[0]) * parseInt(numbers[1]);
    return product.toString();
  }

   // Function to find a number that is both a square and a cube (perfect sixth power)
   if (query.toLowerCase().includes("both a square and a cube")) {
    const numbers = query.match(/-?\d+/g);
    console.log("Checking perfect sixth power for:", numbers); // Debugging log
    if (numbers === null) {
      return "No Match";
    }

    const perfectSixthPowers = numbers.filter(num => {
      const n = parseInt(num);
      const root = Math.round(Math.pow(n, 1 / 6)); // Take the 6th root and round
      const isPerfectSixth = Math.pow(root, 6) === n; // Check if it's a true 6th power
      console.log(`Checking ${n}: 6th root = ${root}, is perfect sixth? ${isPerfectSixth}`);
      return isPerfectSixth;
    });

    return perfectSixthPowers.length > 0 ? perfectSixthPowers.join(", ").trim() : "No Match";
  }

  // Function to find prime numbers in a given list
if (query.toLowerCase().includes("prime")) {
  const numbers = query.match(/-?\d+/g);
  if (numbers === null) {
    return "No Match";
  }

  // Function to check if a number is prime
  const isPrime = (n: number): boolean => {
    if (n < 2) return false;
    if (n === 2 || n === 3) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const primeNumbers = numbers.filter(num => isPrime(parseInt(num)));
  return primeNumbers.length > 0 ? primeNumbers.join(", ") : "No Match";
}

// Function for exponentiation (power calculation)
if (query.toLowerCase().includes("to the power of")) {
  const numbers = query.match(/-?\d+/g);
  if (numbers === null || numbers.length < 2) {
    return "No Match";
  }
  const base = parseInt(numbers[0]);
  const exponent = parseInt(numbers[1]);
  const result = Math.pow(base, exponent);
  return result.toString();
}


  return "No Match"; 
}
