const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {

    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("assets", resolve("src/assets"))
            .set("components", resolve("src/components"))
            .set("base", resolve("baseConfig"))
            .set("public", resolve("public"));
    },


    // rem 适配设置
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // remUnit 取设计稿的1/10，如设计稿是375，则设置为37.5

                        // remUnit: 190
                        remUnit: 37.5
                    })
                ]
            }
        }
    },

}