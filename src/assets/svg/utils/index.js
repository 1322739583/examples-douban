/**
 * 将 CSS 属性名转换为驼峰命名
 * @param {string} key - 属性名，例如 "font-size"
 * @returns {string} - 驼峰命名的属性名，例如 "fontSize"
 */
function toCamelCase(key) {
  return key.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

/**
 * 将 style 字符串转换为对象，并支持驼峰命名转换
 * @param {string} styleString - 样式字符串
 * @param {boolean} camelCase - 是否将属性名转换为驼峰命名
 * @returns {Object} - 样式对象
 */
function parseStyleString(styleString, camelCase = true) {
  const styleObject = {};
  if (!styleString) return styleObject;

  const stylePairs = styleString.match(/[^:;]+:[^:;]+/g) || [];

  stylePairs.forEach((pair) => {
    let [key, value] = pair.split(":").map((part) => part.trim());
    if (key && value) {
      // 如果需要驼峰命名，转换属性名
      if (camelCase) {
        key = toCamelCase(key);
      }
      styleObject[key] = value;
    }
  });

  return styleObject;
}

export default parseStyleString;
