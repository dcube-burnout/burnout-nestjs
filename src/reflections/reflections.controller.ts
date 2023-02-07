import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateReflectionDto } from './dto/create-reflection.dto';
import { RetrieveReflectionsDto } from './dto/retrieve-reflections.dto';
import { ReflectionsService } from './reflections.service';

@Controller('reflections')
export class ReflectionsController {
  constructor(private readonly reflectionsService: ReflectionsService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  retrieveReflections(@Param() params: RetrieveReflectionsDto) {
    return this.reflectionsService.findByUser(params.userId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  createReflection(@Body() createReflectionDto: CreateReflectionDto) {
    return this.reflectionsService.createReflection(
      createReflectionDto,
      createReflectionDto.userId,
    );
  }
}
