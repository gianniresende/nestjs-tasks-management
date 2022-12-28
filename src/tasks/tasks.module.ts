import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRespository } from 'src/shared/repositories/task.respository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRespository])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
