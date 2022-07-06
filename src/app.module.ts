import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://jeanlucaspy:myspace123@cluster0.j8w4m.mongodb.net/test',
    ),
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
