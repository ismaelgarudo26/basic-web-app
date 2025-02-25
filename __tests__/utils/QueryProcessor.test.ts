import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {

    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return Shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe(
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        );
    });

    test('should return name', () => {
        const query = "What is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("ismael garudo");
    });

    test('should return Andrew ID', () => {
        const query = "What is your Andrew ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("igarudo");
    });

    // Test for largest number
    test('should return the largest number', () => {
        const query = "Which of the following numbers is the largest: 72, 21, 65?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("72");
    });

    // Test for smallest number
    test('should return the smallest number', () => {
        const query = "Which of the following numbers is the smallest: 15, 22, 9?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("9");
    });

    // Test for addition
    test('should return the sum of two numbers', () => {
        const query = "What is 30 plus 40?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("70");
    });

    // Test for subtraction
    test('should return the difference of two numbers', () => {
        const query = "What is 50 minus 20?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("30");
    });

    // Test for multiplication with "multiplied by"
    test('should return the product of two numbers (multiplied by)', () => {
        const query = "What is 33 multiplied by 99?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("3267");
    });

    // Test for multiplication with "times"
    test('should return the product of two numbers (times)', () => {
        const query = "What is 7 times 6?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("42");
    });

    // Test for multiplication with "x"
    test('should return the product of two numbers (x)', () => {
        const query = "What is 50 x 20?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1000");
    });

    // Test for perfect sixth power (square and cube)
    test('should return numbers that are both a square and a cube', () => {
        const query = "Which of the following numbers is both a square and a cube: 4150, 1728, 729, 2275, 2222, 2809, 381?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1728, 729");
    });

    // Test for prime numbers
    test('should return prime numbers from a list', () => {
        const query = "Which of the following numbers are primes: 20, 53, 72, 38, 34?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("53");
    });

    test('should return multiple prime numbers', () => {
        const query = "Which of the following numbers are primes: 11, 15, 19, 25, 31?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("11, 19, 31");
    });

    test('should return no primes if none exist', () => {
        const query = "Which of the following numbers are primes: 4, 6, 8, 10?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("No Match");
    });
    test('should return the power of a number', () => {
        const query = "What is 2 to the power of 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("8");
    });
    
    test('should handle large exponentiation', () => {
        const query = "What is 5 to the power of 4?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("625");
    });
    
    test('should handle edge case of power 0', () => {
        const query = "What is 10 to the power of 0?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("1");
    });
    
    test('should handle negative base with even exponent', () => {
        const query = "What is -2 to the power of 4?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("16");
    });
    
    test('should handle negative base with odd exponent', () => {
        const query = "What is -2 to the power of 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("-8");
    });
    

});
