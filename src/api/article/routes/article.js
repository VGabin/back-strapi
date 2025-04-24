module.exports = {
    routes: [
      {
        method: 'PUT',
        path: '/articles/:id',
        handler: 'api::article.article.update',
        config: {
          policies: [
            'plugin::users-permissions.isAuthenticated',
            'global::is-owner',
          ],
        },
      },
      {
        method: 'DELETE',
        path: '/articles/:id',
        handler: 'api::article.article.delete',
        config: {
          policies: [
            'plugin::users-permissions.isAuthenticated',
            'global::is-owner',
          ],
        },
      },
    ],
  };
  