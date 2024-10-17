function longest(str) {
  if (typeof str !== 'string') return null;
  if (str === '') return '';
  const words = str.split(' ');
  let longestWord = words[0];
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

function shortest(str) {
  if (typeof str !== 'string') return null;
  if (str === '') return '';
  const words = str.split(' ');
  let shortestWord = words[0];
  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}

function reverse(str) {
  if (typeof str !== 'string') return null;
  return str.split('').reverse().join('');
}

function vowels(str) {
  if (typeof str !== 'string') return 0;
  const vowelList = 'aeiouyáéýúíóöæ';
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowelList.includes(char)) {
      count++;
    }
  }
  return count;
}

function consonants(str) {
  if (typeof str !== 'string') return 0;
  const consonantList = 'bdðfghjklmnprstvxþ';
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (consonantList.includes(char)) {
      count++;
    }
  }
  return count;
}

function palindrome(str) {
  if (typeof str !== 'string') return false;
  if (str === '') return false; // Tómur strengur er ekki samhverfur
  const cleanedStr = str.toLowerCase().replace(/[^a-záéýúíóöæ]/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}

function start() {
  alert('Velkomin í strengjagreiningarforritið! Sláðu inn streng til að fá upplýsingar.');
  const input = prompt('Sláðu inn streng:');
  if (input === null || input === '') return;

  const longestWord = longest(input);
  const shortestWord = shortest(input);
  const reversed = reverse(input);
  const vowelCount = vowels(input);
  const consonantCount = consonants(input);
  const isPalindrome = palindrome(input);

  alert(`Niðurstöður:
Lengsta orðið: ${longestWord}
Stysta orðið: ${shortestWord}
Öfugur strengur: ${reversed}
Fjöldi sérhljóða: ${vowelCount}
Fjöldi samhljóða: ${consonantCount}
Er samhverfur: ${isPalindrome ? 'Já' : 'Nei'}`);

  if (confirm('Viltu prófa annan streng?')) {
    start();
  }
}