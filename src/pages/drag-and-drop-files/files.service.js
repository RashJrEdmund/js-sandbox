const isDirectory = (item) => {
  return item.kind === 'file' && item.webkitGetAsEntry().isDirectory;
};

const isFile = (item) => {
  return item.kind === 'file' && item.webkitGetAsEntry().isFile;
};

export {
  isDirectory,
  isFile,
};
