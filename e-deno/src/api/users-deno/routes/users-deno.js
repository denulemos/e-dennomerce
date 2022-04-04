'use strict';

/**
 * users-deno router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::users-deno.users-deno');
