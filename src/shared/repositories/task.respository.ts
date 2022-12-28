import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskRespository {
  constructor(
    @InjectRepository(Task)
    private readonly repository: Repository<Task>,
  ) {}
}
