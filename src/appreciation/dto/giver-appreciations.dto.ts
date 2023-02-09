import { ApiProperty } from '@nestjs/swagger';

export class GiverAppreciationsDto {
  @ApiProperty()
  giverId: number;
}
