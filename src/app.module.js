import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { OrganizationController } from './organization/organization.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, OrganizationController],
  providers: [AppService],
})
export class AppModule {}
