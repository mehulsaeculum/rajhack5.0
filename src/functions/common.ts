const ALPHABET_AND_DIGITS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const generateToken = () => {
  let text = '';
  for (let i = 0; i < 30; i++)
    text += ALPHABET_AND_DIGITS.charAt(Math.floor(Math.random() * ALPHABET_AND_DIGITS.length));
  return text;
};

const escapeRegExp = (pattern: string) => {
  return (pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).trim();
}

const replaceDoubleBraces = (str: string, result: any) => {
  return str.replace(/{{(.+?)}}/g, (_, g1) => result[g1] || g1)
}

export { generateToken, escapeRegExp, replaceDoubleBraces }
