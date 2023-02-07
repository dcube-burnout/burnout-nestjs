import { ApiProperty } from '@nestjs/swagger';

export class CreateBurnoutInvDto {
	@ApiProperty()
	responses: number;
	sessionId: number;
}
