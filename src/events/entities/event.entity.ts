import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EventDocument = Event & Document;

@Schema()
export class Event {
  @Prop()
  nameEvent: string;

  @Prop()
  dateEvent: Date;

  @Prop()
  description: string;

  @Prop()
  location: string;

  @Prop()
  howToSee: string;
}

export const EventSchema = SchemaFactory.createForClass(Event);
