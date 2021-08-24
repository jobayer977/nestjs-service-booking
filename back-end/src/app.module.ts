import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { AllExceptionsFilter } from '@application/interceptor/exception.filter';
import { AppEventModule } from '@application/events/appevent.module';
import { AuthMiddleware } from '@application/middlewares/auth.middleware';
import { AuthModule } from '@modules/auth/auth.module';
import { CommonModule } from '@common/common.module';
import { HelperModule } from '@application/helpers/helper.module';
import { PermissionGuard } from './app/@application/guards/permission.guard';
import { PermissionModule } from '@modules/permission/permission.module';
import { ResponseModifierMiddleware } from '@application/middlewares/response-modifier.middleware';
import { ResponsePlaceholderInterceptor } from '@application/interceptor/response-placeholder.interceptor';
import { ServiceModule } from '@modules/service/service.module';
import { UserModule } from '@modules/user/user.module';

@Module({
  imports: [
    AppEventModule,
    PermissionModule,
    ServiceModule,
    UserModule,
    HelperModule,
    CommonModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponsePlaceholderInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ResponseModifierMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
    consumer
      .apply(AuthMiddleware)
      .exclude(
        {
          path: '/api/v1/auth/login',
          method: RequestMethod.POST,
        },
        {
          path: '/api/v1/auth/register',
          method: RequestMethod.POST,
        },
      )
      .forRoutes('*');
  }
}
