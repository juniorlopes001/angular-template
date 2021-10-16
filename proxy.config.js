const proxy = [
    {
      context: '/api',
      target: 'http://localhost:59969',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;