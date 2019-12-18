export default function newLine2Br(json) {
  console.log(json);
  if (json !== undefined) {
    return json.replace(/(?:\r\n|\r|\n)/g, '<br/>');
  }
  return undefined;
}
