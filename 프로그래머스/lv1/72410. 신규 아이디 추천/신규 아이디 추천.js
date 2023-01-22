function solution(new_id) {
    let createdId = new_id.toLowerCase().replace(/[^a-z0-9-_.]/g, '');
  createdId = createdId.replace(/[.]{2,}/g, '.');
  createdId = createdId.replace(/^[.]|[.]$/g, '');
  if (createdId.length === 0) createdId = 'a';
  if (createdId.length >= 16) createdId = createdId.substring(0, 15);
  createdId = createdId.replace(/[.]$/, '');
  if (createdId.length <= 2) {
    createdId += createdId.slice(-1).repeat(3 - createdId.length);
  }

  return createdId;
}