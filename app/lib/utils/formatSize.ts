function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Ensure index stays within array bounds
  const index = Math.min(i, sizes.length - 1);

  const value = bytes / Math.pow(k, index);

  return `${value.toFixed(2)} ${sizes[index]}`;
}

export const generateUUID = (): string => crypto.randomUUID();

export default formatSize;


