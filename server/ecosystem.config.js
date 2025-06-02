module.exports = {
  apps: [
    {
      name: "Task-management",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
