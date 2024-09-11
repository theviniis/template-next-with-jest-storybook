module.exports = {
  '*.{js,jsx,ts,tsx}': (fileNames) => [
    `yarn format ${fileNames.join(' ')}`,
    `yarn lint:fix --file ${fileNames.join(' ')}`,
  ],
}
