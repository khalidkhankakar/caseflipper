export const snakeCase = (str: string): string => {
  return str
    .split(/(?=[A-Z])|[\s_-]+/)
    .join('_')
    .toLowerCase();
};
