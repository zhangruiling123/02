const path = require('path')
module.exports ={
    devServer:{
        proxy:{
            '/api':{
                target:'http://:3000',
                changeOrigin:true,
                pathRewerite:{
                    '/api':''
                }
            }
        }
    }
}