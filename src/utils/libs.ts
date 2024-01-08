export const defineProperty = (target: any, key: string, defaultValue: any) => {
  Object.defineProperty(target, key, {
    value: defaultValue,
    enumerable: true,
    configurable: true,
  });
};
