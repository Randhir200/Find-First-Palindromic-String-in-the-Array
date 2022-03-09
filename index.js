// Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".

// A string is palindromic if it reads the same forward and backward.
var firstPalindrome = function(words) {
  let c=0;
  let s="";
  let ns="";
  for(let i=0;i<words.length;i++){
      c=0;
      s="";
      for(let j=(words[i].length-1);j>=parseInt((words[i].length)/2);j--){
          if(words[i][j]==words[i][c]){
             s=s+words[i][c];
             if(s.length>=parseInt((words[i].length)/2) || s.length==words[i].length){
                 ns=words[i];
                }
              c++;
          }
         }
      if(ns==words[i]){
          break;
      }
  }  
    return ns;
    
};

let arr = ["abc","car","ada","racecar","cool"];
console.log(firstPalindrome(arr));