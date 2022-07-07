import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeormService } from './typeorm.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [TypeormService],
})
export class TypeormModule {}
