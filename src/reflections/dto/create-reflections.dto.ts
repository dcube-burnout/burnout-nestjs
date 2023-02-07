import { ApiProperty } from '@nestjs/swagger';

export class CreateReflectionsDto {
  @ApiProperty()
  session!: number;

  @ApiProperty()
  achievements: string;

  @ApiProperty()
  responses: string; // store as string - "1,2,3,3,2,1,2"
}
