module.exports = function (api) {
    api.cache(true)

    const presets = ['next/babel']
    const plugins = [['macros']]

    return {
        presets,
        plugins,
    }
}
