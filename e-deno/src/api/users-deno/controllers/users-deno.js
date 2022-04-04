'use strict';

/**
 *  users-deno controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::users-deno.users-deno');
