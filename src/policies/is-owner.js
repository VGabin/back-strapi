module.exports = async (ctx, next) => {
    const { id } = ctx.params;
    const user = ctx.state.user;
    const entity = await strapi.entityService.findOne(
      'api::article.article',
      id,
      { populate: ['author'] }
    );
    if (!entity || entity.author.id !== user.id) {
      return ctx.unauthorized('Vous ne pouvez modifier ou supprimer que vos propres articles.');
    }
    return next();
  };
  