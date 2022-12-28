import { IsEnum } from 'class-validator';
import { TaskStatus } from '../../tasks/task.module';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
