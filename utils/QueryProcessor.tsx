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


//   //function returns largest number
//   if (query.toLowerCase().includes("largest")) {
//     const numbers = query.match(/\d+/g);
//     if (numbers === null) {
//       return "No Match";
//     }
//     const largest = Math.max(...numbers.map(Number));
//     return `The largest number is ${largest}`;
//   }
//   //function for adding two numbers What is 30 plus 60?
//   if (query.toLowerCase().includes("plus")) {
//     const numbers = query.match(/\d+/g);
//     if (numbers === null) {
//       return "No Match";
//     }
//     const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
//     return `The sum is ${sum}`;
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
    const numbers = query.match(/-?\d+/g); // Handles negative numbers too
    if (numbers === null) {
      return "No Match";
    }
    const largest = Math.max(...numbers.map(Number));
    return largest.toString(); // Fix: Return only the number
  }

  // Function for adding two numbers
  if (query.toLowerCase().includes("plus")) {
    const numbers = query.match(/-?\d+/g); // Handles negative numbers too
    if (numbers === null) {
      return "No Match";
    }
    const sum = numbers.reduce((acc, num) => acc + parseInt(num), 0);
    return sum.toString(); // Fix: Return only the sum
  }

  return "No Match"; 
}
