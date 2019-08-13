export const log = (val, ...params) => {
  let type = "log";
  let value = val;
  if (val.includes(":") && val.split(":")[0].toLowerCase() in console) {
      let vals = val.split(":");
      type = vals[0].toLowerCase();
      value = vals.slice(1).reduce((final, substr) => final + substr);
  }
  
  params.forEach(() => value += "\n%o");
  
  console[type](value, ...params);
}