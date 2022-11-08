export default function parseContent(contentStr) {
  const result = {
    content: "",
    summary: "",
  };

result.content = contentStr
result.summary = contentStr

var split = result.summary.split('')

  let last = split[split.length -1]


  // TODO: Implement the parser module
  for(let i = 0; i < result.summary.length; i++){
    console.log(result.summary)
    if(result.summary[i] === last){
    }
  }

console.log(result.summary)

  return result;
}
