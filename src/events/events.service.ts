import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { ActiveStatusEnum } from 'src/commom/enum/enum';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const event = this.eventRepository.create(createEventDto);
    await this.eventRepository.save(event);
    return event;
  }

  findAll() {
    return this.eventRepository.find();
  }

  findOne(id: string) {
    const forms = this.eventRepository.findOne(id);
    return forms;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepository.findOne(id);
    const eventUpdated = await this.eventRepository.save(
      Object.assign(event, updateEventDto),
    );
    return eventUpdated;
  }

  remove(id: string) {
    this.eventRepository.update(id, {
      status: ActiveStatusEnum.INATIVE,
    });
    return;
  }
}
