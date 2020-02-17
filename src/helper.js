export const ReduceText = (text, noOfWords) => {
  let splitedWords = text.split(" ")
  if (splitedWords.length > noOfWords)
    return splitedWords.slice(0, noOfWords).join(" ") + " ... "
  return text
}
