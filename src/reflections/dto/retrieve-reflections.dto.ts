import { ApiProperty } from '@nestjs/swagger';

export class RetrieveReflectionsDto {
  @ApiProperty()
  userId: number;
}
