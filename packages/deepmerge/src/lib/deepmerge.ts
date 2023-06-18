function isObject(obj: any) {
  return typeof obj === 'object' && obj !== null;
}

function getObjectKeys(source: any, target: any) {
  return Object.keys(source)
    .concat(Object.keys(target))
    .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
}

export function deepmerge(source: any, target: any): any {
  if (source && !target) return source;
  if (!source && target) return target;

  for (const key of getObjectKeys(source, target)) {
    if (Array.isArray(source[key]) && Array.isArray(target[key])) {
      const count =
        source[key].length > target[key].length
          ? source[key].length
          : target[key].length;
      for (let i = 0; i < count; i++) {
        target[key][i] = deepmerge(source[key][i], target[key][i]);
      }
    } else if (isObject(source[key]) && isObject(target[key])) {
      target[key] = deepmerge(source[key], target[key]);
    } else if (source[key] !== undefined) {
      target[key] = source[key];
    }
  }

  return target;
}
