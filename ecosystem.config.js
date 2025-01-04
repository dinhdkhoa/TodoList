module.exports = {
  apps: [
    {
      name: 'TodoList',
      script: "serve",
    env: {
      PM2_SERVE_PATH: './build',
      PM2_SERVE_PORT: 8080
    }
    }
  ]
}
