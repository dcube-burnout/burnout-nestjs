import { ApiProperty } from '@nestjs/swagger';

export class RetrieveAppreciationsDto {
  @ApiProperty()
  userId: number;
}
