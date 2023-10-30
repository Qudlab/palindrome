function isPalindrome(word) {
    word = word.replace(/\s/g, '').toLowercase();
    if (word.length <= 1) {
        return true;
    }
    if (word[0] === word[word.length - 1]) {
        return isPalindrome(word.slice(1, -1));
    } else {
        return false;
    }
}
const word = "radar";
if (isPalindrome(word)) {
    console.log('${word} is a palindrome.');
} else {
    console.log('${word} is not a palindrome.');
}