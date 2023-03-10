import { ApiProperty } from '@nestjs/swagger';

export class CreateAppreciationDto {
  @ApiProperty()
  receiverId: number;

  @ApiProperty()
  writeup: string;

  @ApiProperty()
  userId: number;
}
