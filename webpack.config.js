module.exports = {
  entry: "./src/app.js",
  output: {
    path: "./",
    filename: "index.js"
  },
  module: {
    exclude: [/node_modules/]
  }
}
