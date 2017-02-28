function machiningRaw(raw, namelist, filter) {
  const result = [];
  let rawData = raw;
  // filter
  if (filter) {
    rawData = rawData.filter(filter);
  }
  rawData.forEach((rawItem) => {
    const array = [];
    namelist.forEach((value) => {
      array.push(rawItem[value]);
    });
    result.push(array);
  });
  console.log(result);
  return result;
}
export default {
  machiningRaw,
};
