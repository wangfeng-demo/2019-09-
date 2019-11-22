let express = require('express');
let qs = require('qs')
//express 是 nodeJS 的一个库
let app = express();
app.listen(8000, function () {
    console.log('服务起于 8000端口');

})

//express 使用中间件
app.use((req, res, next) => {
    req.qqq = 123456;
    next();

})
app.use((req, res, next) => {
    console.log(req.qqq);
    res.header('ha', 'haha')
    next();
})
app.use(express.static('./static')) //experss.static是express提供一个访问静态页面的方法

app.get('/list', function (req, res) {
    // 该回调函数，只有在前端请求的是/list路径的时候，并且是get请求才会执行
    console.log(req.query);
    res.send({
        qqq: req.qqq 
    })
})

app.post('/add', function (req, res) {
    let str = '';
    req.on('data', function (chunk) {
        str += chunk;
    })
    req.on('end', function () {
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        // console.log(str, str.a);
        // console.log(qs.parse(str));
        console.log(obj);
        res.send({
            code: 0,
            data: 'success'
        })
    })
})