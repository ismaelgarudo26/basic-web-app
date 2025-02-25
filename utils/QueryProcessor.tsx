
// export default function QueryProcessor(query: string): string {
//   console.log("Deployment test");

//   if (query.toLowerCase().includes("shakespeare")) {
//     return (
//       "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
//       "English poet, playwright, and actor, widely regarded as the greatest " +
//       "writer in the English language and the world's pre-eminent dramatist."
//     );
//   }

//   if (query.toLowerCase().includes("name")) {
//     return "ismael garudo"; 
//   }

//   if (query.toLowerCase() === "what is your andrew id?") {
//     return "igarudo"; 
//   }

//   // Function to return the largest number
//   if (query.toLowerCase().includes("largest")) {
//     const numbers = query.match(/-?\d+/g); // Handles negative numbers too
//     if (numbers === null) {
//       return "No Match";
//     }
//     const largest = Math.max(...numbers.map(Number));
//     return largest.toString(); // Fix: Return only the number
//   }

//   // Function for adding two numbers
//   if (query.toLowerCase().includes("plus")) {
//     const numbers = query.match(/-?\d+/g); // Handles negative numbers too
//     if (numbers === null) {
//       return "No Match";
//     }
//     const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
//     return sum.toString(); // Fix: Return only the sum
//   }

//   // Function to return the smallest number
//   if (query.toLowerCase().includes("smallest")) {
//     const numbers = query.match(/-?\d+/g);
//     if (numbers === null) {
//       return "No Match";
//     }
//     const smallest = Math.min(...numbers.map(Number));
//     return smallest.toString(); // Return only the number
//   }

//   // Function for subtraction (e.g., "What is 50 minus 20?")
//   if (query.toLowerCase().includes("minus")) {
//     const numbers = query.match(/-?\d+/g);
//     if (numbers === null || numbers.length < 2) {
//       return "No Match";
//     }
//     // Subtract in order: first number minus second number
//     const difference = parseInt(numbers[0]) - parseInt(numbers[1]);
//     return difference.toString(); // Return only the result
//   }

//    // Function to find a number that is both a square and a cube (perfect sixth power)
//    if (query.toLowerCase().includes("both a square and a cube")) {
//     const numbers = query.match(/-?\d+/g);
//     if (numbers === null) {
//       return "No Match";
//     }

//     // Check for perfect sixth powers
//     const perfectSixthPowers = numbers.filter(num => {
//       const n = parseInt(num);
//       const root = Math.round(Math.pow(n, 1 / 6)); // Sixth root
//       return Math.pow(root, 6) === n; // Verify if it's a sixth power
//     });

//     return perfectSixthPowers.length > 0 ? perfectSixthPowers.join(", ") : "No Match";
//   }





//   return "No Match"; 
// }

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
    if (numbers === null) {
      return "No Match";
    }

    // Check for perfect sixth powers
    const perfectSixthPowers = numbers.filter(num => {
      const n = parseInt(num);
      const root = Math.round(Math.pow(n, 1 / 6)); // Sixth root
      return Math.pow(root, 6) === n; // Verify if it's a sixth power
    });

    return perfectSixthPowers.length > 0 ? perfectSixthPowers.join(", ") : "No Match";
  }

  return "No Match"; 
}
