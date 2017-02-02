module.exports={
    entry: "./home.es6",
    output: {
        //path: __dirname + "/dist",
        filename: "build.js",
        library: "home"
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: "source-map"
};
