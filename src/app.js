const compression = require('compression')
const express = require('express')
const {default: helmet} = require('helmet')
const morgan = require('morgan')
const app = express()


// morgan: In ra các log khi user chạy 1 request
// morgan("dev")
// morgan("combined")
// morgan("common")
// morgan("short")
// morgan("tiny")
// --- init middleware
app.use(morgan("dev"))
app.use(helmet()) // Bảo vệ thông tin riêng tư, ngăn chặn các trang bên thứ 3 đọc thông tin của chúng ta.
app.use(compression())


// init db
// init routes
app.get('/', (req, res, next) => {
    const strCompress = 'hello fanTipJs'
    return res.status(200).json({
        message: 'Welcome fan tipJS!',
        metadata: strCompress.repeat(100000)
    })
})
// handling error
module.exports = app