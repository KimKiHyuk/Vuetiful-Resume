export default function newLine2Br(json) {
  if (json !== undefined) {
    return json.replace(/(?:\r\n|\r|\n)/g, '<br/>');
  }
  return undefined;
}
