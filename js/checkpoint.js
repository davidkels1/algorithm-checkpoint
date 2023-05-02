// Define the input sentence
const sentence = "I am a javascript developer at Gomycode";

// Define variables to store the length of the sentence, number of words, and number of vowels
let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;

// Loop through each character in the sentence
for (let i = 0; i < sentence.length; i++) {
  sentenceLength++;

  // If the character is a space, increment the word count
  if (sentence[i] === " ") {
    wordCount++;
  }

  // If the character is a vowel (a, e, i, o, or u), increment the vowel count
  if (["a", "e", "i", "o", "u"].includes(sentence[i].toLowerCase())) {
    vowelCount++;
  }
}

// Add 1 to the word count to account for the last word in the sentence (which doesn't have a space after it)
wordCount++;

// Log the results to the console
console.log(`Sentence length: ${sentenceLength}`);
console.log(`Word count: ${wordCount}`);
console.log(`Vowel count: ${vowelCount}`);