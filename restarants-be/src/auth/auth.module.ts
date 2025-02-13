import { Module } from '@nestjs/common';
import { AuthController } from './api/auth.controller';
import { AuthService } from './services/auth.service';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtfConstants } from './config';

@Module({
  imports: [InfrastructureModule,JwtModule.register({
    global:true,
    secret:jwtfConstants.secret,
    signOptions:{expiresIn:'60s'}
  })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
