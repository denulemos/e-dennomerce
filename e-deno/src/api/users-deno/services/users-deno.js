'use strict';

/**
 * users-deno service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-deno.users-deno');
