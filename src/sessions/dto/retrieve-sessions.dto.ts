import { ApiProperty } from '@nestjs/swagger';

export class RetrieveSessionsDto {
  @ApiProperty()
  userId: number;
}
