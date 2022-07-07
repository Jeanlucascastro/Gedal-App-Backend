import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './config/typeorm/typeorm.service';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    EventsModule,
    TypeOrmModule.forRootAsync({
      useClass: TypeormService,
    }),
    ConfigModule.forRoot(),
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
