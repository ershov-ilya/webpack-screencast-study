const webpack = require('webpack');
console.log('process.env.NODE_ENV: ',process.env.NODE_ENV);
const env = process.env.NODE_ENV || 'development';
console.log('env: ',env);

module.exports={
    entry: "./home.es6",
    output: {
        //path: __dirname + "/dist",
        filename: "build.js",
        library: "home"
    },

    //watch: env=='development', // watch в режиме development

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: env=='development'?"source-map":false,

    plugins: [
        new webpack.EnvironmentPlugin({ 'NODE_ENV':'development' })
    ],

    //resolve:{
    //    extensions: ["",".js"]
        //modulesDirectories: ["node_modules"]
    //},

    module:{

        loaders: [{
            test: /\.es6\.js$/,
            loader: 'babel-loader?presets[]=es2015'
        }]

    }
};
