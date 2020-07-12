const path = require('path');
const resolve = (dir) => path.join(__dirname,dir);
//安装 body-parser 可以让我们 可以拿到post请求里面的body数据
let bodyParser = require("body-parser");

module.exports = {
    publicPath: './', //打包路径，使用相对路径生成的dist文件夹下的index可以打开
    // 输出文件目录
    outputDir: 'dist',
    //取消生成map文件
    productionSourceMap: false,
    // webpack-dev-server 相关配置
    devServer: {
        //配置自动启动浏览器
        open: false,
        host: '0.0.0.0',
        port: 8088,
        https: false,
        hotOnly: false,
        // 设置代理
        proxy: {
            '/front/0201100201/login': {
                target: 'http://10.10.2.241:5001/',
                pathRewrite: {
                    '^/front/0201100201': ''
                },
                ws: true,
                changeOrigin: true
            }
        },
        before: app => { }
    },
    chainWebpack: config =>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('common',resolve('src/common'))
            .set('utils', resolve('src/utils'))
    },
    // 第三方插件配置
    pluginOptions: {
        //1) vue-cli3 使用less全局变量
        //需安装vue add style-resources-loader
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname,'./src/common/less/index.less'),
                //这个是加上自己的路径，
            ]
        }
    },
    configureWebpack: {
        devServer: {
            before(app) {
                // 用来解析post的请求格式
                app.use(bodyParser.urlencoded({ extended: false }));
                app.use(bodyParser.json());

                // 中间件 来判断一下路由的请求
                app.use(function(req, res, next) {
                    if (/^\/api/.test(req.path)) {
                        if (req.path === "/api/login" || req.headers.token) {
                            next();
                        } else {
                            /* 抛出状态 用户需要登录 */
                            res.sendStatus(401);
                        }
                    } else {
                        next();
                    }
                });

                // 用来测试状态的接口
                app.get("/api/test", function(req, res) {
                    res.json({
                        code: "00000000",
                        list: []
                    });
                });

                // 登录接口
                app.post("/api/login", function(req, res) {
                    const { username, password } = req.body;
                    if (username === "littleBee" && password === "123456") {
                        res.json({
                            code: "00000000",
                            token: "DESCRIPTIONTOKEN",
                            messages: "success"
                        });
                    } else {
                        res.json({
                            code: "20150001",
                            messages: "用户名或密码错误"
                        });
                    }
                });

                // 如果沒有安裝body-parser 那我們拿到post的请求参数 需要下面这个样子
                app.post("/api/login", function(req, res) {
                    // 定义一个空数组 用来装请求的东西
                    let body = [];
                    req.on("data", chunk => {
                        // chunk 是Buffer对象 将传过来的二进制进行保存
                        body.push(chunk);
                    }).on("end", ()=> {
                        //数据接受完毕 将body 转化成完成的Buffer
                        body = Buffer.concat(body).toString();
                    })
                    // 然后将传递过来的参数 转化成JSON格式 方便调用
                    const { username, password } = JSON.parse(body);
                    // 这样子 我们就可以获取到post 请求的参数了
                    if (username === "littleBee" && password === "123456") {
                        res.json({
                            code: "00000000",
                            token: "DESCRIPTIONTOKEN",
                            messages: "success"
                        });
                    } else {
                        res.json({
                            code: "20150001",
                            messages: "用户名或密码错误"
                        });
                    }
                });

                // 退出登录的接口
                app.post("/api/loginout", function(req, res) {
                    res.json({
                        code: "-1",
                        messages: "退出成功"
                    });
                });
            }
        }
    }
}