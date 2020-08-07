/*module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
};
*/

const {getDefaultConfig} = require('metro-config');

module.exports = (async () => {
  const {
      resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()
  return {
      transformer: {
          assetPlugins: ['expo-asset/tools/hashAssetFiles'],
          getTransformOptions: async () => ({
              transform: {
                  experimentalImportSupport: false,
                  inlineRequires: false
              }
          })
      },
      resolver: {
        sourceExts,
        assetExts: [...assetExts, 'hcscript']
      }
  }
})()