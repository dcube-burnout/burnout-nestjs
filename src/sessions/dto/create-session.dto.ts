import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  userId: number;
}
