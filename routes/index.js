const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.get('/war3icon', async (ctx, next) => {
  const dirPath = path.resolve(__dirname, '../assets/war3icon')
  const iconPaths = fs.readdirSync(dirPath)
  const randomIndex = Math.floor(iconPaths.length * Math.random())
  const iconPath = path.resolve(__dirname, '../assets/war3icon', iconPaths[randomIndex])

  const img = fs.readFileSync(path.resolve(__dirname, iconPath))
  // ctx.type = 'jpg'
  let filename = 'war3icon ' + new Date()
  ctx.set('Content-disposition', 'attachment; filename =' + filename + '.jpg')
  ctx.set('Content-type', 'application/jpg')
  ctx.body = img
})

module.exports = router