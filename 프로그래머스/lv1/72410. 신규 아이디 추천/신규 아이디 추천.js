function solution(new_id) {
    let recommendedId = new_id
      .toLowerCase()
      .replace(/[^a-z0-9-_\.]/g, "")
      .replace(/\.{2,}/g, ".")
      .replace(/^\.|\.$/g, "");

    if (!recommendedId) recommendedId = "a";

    const len = recommendedId.length;
    if (len >= 16) recommendedId = recommendedId.slice(0, 15).replace(/\.$/g, "");
    if (len <= 2) recommendedId += recommendedId.at(-1).repeat(3 - len);

    return recommendedId
}