module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '05e454e6adfd48c614c892ffb840d78d'),
  },
});
