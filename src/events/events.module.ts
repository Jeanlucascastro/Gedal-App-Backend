import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([Event]),
    EventsModule,
  ],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
