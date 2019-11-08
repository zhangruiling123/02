const path = require('path')
module.exports ={
    devServer:{
        proxy:{
            '/api':{
                target:'http://169.254.60.24:3000',
                changeOrigin:true,
                pathRewerite:{
                    '/api':''
                }
            }
        }
    }
}