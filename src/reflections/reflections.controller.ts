import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CreateReflectionDto } from './dto/create-reflection.dto';
import { RetrieveReflectionsDto } from './dto/retrieve-reflections.dto';
import { ReflectionsService } from './reflections.service';

@Controller('reflections')
export class ReflectionsController {
  constructor(private readonly reflectionsService: ReflectionsService) {}

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  retrieveReflections(@Query() params: RetrieveReflectionsDto) {
    return this.reflectionsService.findByUser(params.userId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  createReflection(@Body() createReflectionDto: CreateReflectionDto) {
    console.log('createReflectionDto', createReflectionDto);
    return this.reflectionsService.createReflection(
      createReflectionDto,
      createReflectionDto.userId,
    );
  }
}
