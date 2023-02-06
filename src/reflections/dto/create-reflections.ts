import { ApiProperty } from '@nestjs/swagger';

export class CreateReflectionsDto {
	@ApiProperty()
	achievements: string;
}