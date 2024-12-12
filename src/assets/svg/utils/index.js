/**
 * 将 style 字符串转换为对象
 * @param {string} styleString - 样式字符串，例如 "display: block; height: 16px; width: 16px; fill: currentcolor;"
 * @returns {Object} - 样式对象
 */
function parseStyleString(styleString) {
  const styleObject = {};
  if (!styleString) return styleObject; // 如果传入的字符串为空，返回空对象

  // 将字符串按分号分割成键值对数组
  const stylePairs = styleString.split(";").filter((pair) => pair.trim());

  // 遍历键值对数组，将其转换为对象
  stylePairs.forEach((pair) => {
    const [key, value] = pair.split(":").map((part) => part.trim());
    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

export default parseStyleString;
