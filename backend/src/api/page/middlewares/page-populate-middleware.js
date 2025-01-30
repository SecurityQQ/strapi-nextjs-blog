"use strict";

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    ctx.query = {
      pLevel: 5,  // or any depth you need
      
      // Keep existing filters if slug is provided
      ...(ctx.query.filters?.slug ? {
        filters: { slug: ctx.query.filters.slug }
      } : {}),
      
      // Keep existing locale if provided
      ...(ctx.query.locale ? { locale: ctx.query.locale } : {})
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);
    await next();
  };
};