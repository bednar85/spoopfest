module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  singleAttributePerLine: true,

  plugins: ['@trivago/prettier-plugin-sort-imports'],

  importOrder: [
    '<THIRD_PARTY_TS_TYPES>',
    '<TS_TYPES>',
    '<THIRD_PARTY_MODULES>',
    // '^config(.*)$',
    '^lib/(.*)$',
    // '^hooks/(.*)$',
    // '^pages/(.*)$',
    '^components/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderSideEffects: false,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
};
