import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamsDto {
  @ApiProperty({ type: Number })
  leader_id!: number;

  @ApiProperty({ type: [Number] })
  user_ids?: number[];
}

export class AddUserDto {
  @ApiProperty({ type: Number })
  team_id!: number;

  @ApiProperty({ type: Number })
  userId!: number;
}
