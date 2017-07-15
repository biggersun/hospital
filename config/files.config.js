const { resolve } = require('path')

const projectDir = process.cwd()
const srcDir = resolve(projectDir, 'src')
const distDir = resolve(projectDir, 'dist')
const mainDir = resolve(srcDir, 'main')
const appJsPath = resolve(mainDir, 'index.jsx')
const appHtmlPath = resolve(mainDir, 'index.html')

module.exports = {
    projectDir,
    srcDir,
    distDir,
    mainDir,
    appJsPath,
    appHtmlPath,
}
