import { ApiProperty } from '@nestjs/swagger';

export class CreateAppreciationDto {
  @ApiProperty()
  sessionId: number;

  @ApiProperty()
  receiverId: number;

  @ApiProperty()
  writeup: string;
}
