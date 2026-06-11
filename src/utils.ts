export const snakeCase = (str: string): string => {
  return str
    .split(/(?=[A-Z])|[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .join('_')
    .toLowerCase();
};

export const kebabCase = (str: string): string => {
  return str
    .split(/(?=[A-Z])|[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .join('-')
    .toLowerCase();
};

export const camelCase = (str: string): string => {
  const words = str.split(/(?=[A-Z])|[^a-zA-Z0-9]+/).filter(Boolean);
  const firstWord = words[0];
  if (!firstWord) return '';

  return (
    firstWord.toLowerCase() +
    words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  );
};
