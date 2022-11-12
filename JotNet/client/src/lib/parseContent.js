export default function parseContent(contentStr) {

  const result = {
    content: contentStr,
    summary: contentStr ,
  };



var last = result.content[result.content.length -1]

  var max_chars = 256
  if( result.summary.length > max_chars) {
    result.summary = result.summary.substr(0, max_chars);
    }

   result.summary += "..."

  return result;
}
