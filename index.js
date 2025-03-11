const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  
  function titleCased() {
    const titleCased2 = tutorials.map(sentence => {
      return sentence.split(' ') //split converts  a string to array of substrings based on specified operator(hence i used a space )
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) //capitalizing the first letter of each word
        .join(' '); //join is an array method that joins an array of strings to a single string using a specified operator as well(the space)
    });
  
    return titleCased2; // Return the modified array new(since we are using .map)
  }
  
  console.log(titleCased());
