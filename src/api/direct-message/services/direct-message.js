'use strict';

/**
 * direct-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::direct-message.direct-message');
