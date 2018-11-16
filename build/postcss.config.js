/*
* @Author: mengyue
* @Date:   2018-11-15 11:28:08
* @Last Modified by:   mengyue
* @Last Modified time: 2018-11-15 15:49:16
*/

// @import css抽象成语法树，转换css代码，主要是其插件系统
// 插件1：postcss-import @import
// cssnext 支持最新css
// cssnano 优化代码
// Autoprefixer，支持嵌套Nested classes，颜色函数，扩展与类占位符，带参数的混合宏

module.exports = {
    plugins:{
        'postcss-cssnext': {},
        'autoprefixer': {},
        'postcss-pxtorem':{
            rootValue: 100,
            unitPrecision: 5,
            propWidthList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0,
            selectorBlackList: [/^html$/]
        }
    }
}