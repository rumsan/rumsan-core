export default {
  pascalToCamelCase: s =>
    s.replace(/\.?([A-Z])/g, (x, y) => "_" + y.toLowerCase()).replace(/^_/, ""),

  escapeRegex: text => text.replace(/[-[\]{}()*=?.,\\^$|#\s]/g, "\\$&"),

  randomText: length => {
    return Math.random()
      .toString(36)
      .slice(-8);
  }
};
