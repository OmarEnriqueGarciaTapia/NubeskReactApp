export const safeGet = (obj, path, defaultValue = null) => {
  if (!obj || !path) return defaultValue;
  try {
    return String.prototype.split.call(path, /[,[\].]+?/)
      .filter(Boolean)
      .reduce((a, c) => (Object.hasOwnProperty.call(a, c) ? a[c] : defaultValue), obj);
  } catch (e) {
    return defaultValue;
  }
};

export const compose = (obj1, obj2) => {
  if (!obj2) return obj1;
  if (!obj1) return obj2;

  const composedObject = { ...obj1 };

  Object.keys(obj2).forEach((key) => {
    composedObject[key] = obj1[key]
      ? `${obj1[key]} ${obj2[key]}`
      : obj2[key];
  });

  return composedObject;
};