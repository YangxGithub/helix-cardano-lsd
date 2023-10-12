module.exports = {
  apps: [
    {
      name: 'next',
      script: 'npm',
      args: 'start',
      autorestart: true,
      max_restarts: 5,
      min_uptime: '10s',
      restart_delay: 5000,
      out_file: 'logs/next/normal.log',
      error_file: 'logs/next/error.log',
      combine_logs: true,
    }
  ]
};