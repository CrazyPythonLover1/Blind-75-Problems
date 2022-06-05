/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false
  }
  
  const countS = new Set();
  const countT = new Set();
  
  for (let i=0; i<s.length; i++) {
      countS[s[i]] = 1 + (countS[s[i]] ? +countS[s[i]] : 0)
      countT[t[i]] = 1 + (countT[t[i]] ? countT[t[i]] : 0)
      
  }
  
  for (const item in countS){
      if (!countT[item]) return false
      if (countS[item] !== countT[item]) return false
  }
  return true
};