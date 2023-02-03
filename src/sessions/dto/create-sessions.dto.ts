import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionsDto {
  @ApiProperty()
  title: string;
}
