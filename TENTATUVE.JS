function grabscrab(anagram, dictionary) {
  let reponse = []
  for (let i = 0; i < dictionary.lenght; i++) {
    if (5 === anagram.length)
      reponse.push(dictionary[i])
  }

  console.log(reponse)
  
    return [reponse];
}
