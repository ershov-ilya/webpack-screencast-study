const webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';

module.exports={
    entry: "./home.es6",
    output: {
        //path: __dirname + "/dist",
        filename: "build.js",
        library: "home"
    },

    watch: env=='development',

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: env=='development'?"source-map":false,

    plugins: [
        new webpack.EnvironmentPlugin({ 'NODE_ENV':'development' })
    ],

    module:{

        loaders: [{
            test: /\.es6\.js$/,
            loader: 'babel-loader?presets[]=es2015'
        }]

    }
};
