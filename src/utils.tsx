export let omit = <T extends { [key: string]: any }, K extends string>(
  obj: T,
  key: K
): Omit<T, K> => {
  let { [key]: omitted, ...rest } = obj;
  return rest;
};
