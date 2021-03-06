import * as path from 'path';

import { config } from 'dotenv';
import { toBool } from '@application/utils';

config({
  path: path.join(
    process.cwd(),
    'environments',
    `${process.env.NODE_ENV || 'development'}.env`,
  ),
});

export const ENV_DEVELOPMENT = 'development';
export const ENV_PRODUCTION = 'production';
export const ENV_STAGING = 'staging';

export const ENV = {
  port: +process.env.PORT,

  API_PREFIX: process.env.API_PREFIX,
  API_TITLE: process.env.API_TITLE,
  API_DESC: process.env.API_DESC,
  API_VERSION: process.env.API_VERSION,
  APP_QUEUE: process.env.APP_QUEUE,

  TYPEORM_CONNECTION: process.env.TYPEORM_CONNECTION,
  TYPEORM_HOST: process.env.TYPEORM_HOST,
  TYPEORM_PORT: process.env.TYPEORM_PORT,
  TYPEORM_USERNAME: process.env.TYPEORM_USERNAME,
  TYPEORM_PASSWORD: process.env.TYPEORM_PASSWORD,
  TYPEORM_DATABASE: process.env.TYPEORM_DATABASE,
  TYPEORM_SYNCHRONIZE: process.env.TYPEORM_SYNCHRONIZE,
  TYPEORM_LOGGING: process.env.TYPEORM_LOGGING,
  TYPEROM_AUTOLOAD_ENTITIES: process.env.TYPEROM_AUTOLOAD_ENTITIES,

  JWT_SECRET: process.env.JWT_SECRET,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
  EXPIRES_IN: process.env.EXPIRES_IN,

  DEFAULT_USER_ROLE: process.env.DEFAULT_USER_ROLE,

  UPLOAD_BASE_PUBLIC_PATH: process.env.UPLOAD_BASE_PUBLIC_PATH,

  CN_CLOUD_NAME: process.env.CN_CLOUD_NAME,
  CN_API_KEY: process.env.CN_API_KEY,
  CN_API_SECRET: process.env.CN_API_SECRET,
  CN_ENHANCE_IMAGE_TAG: toBool(process.env.CN_ENHANCE_IMAGE_TAG),
  CN_STATIC_FILE_SUPPORT: toBool(process.env.CN_STATIC_FILE_SUPPORT),
};
