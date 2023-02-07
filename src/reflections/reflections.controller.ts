import { Controller, Get, UseGuards, Req, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateReflectionsDto } from './dto/create-reflections.dto';
import { ReflectionsService } from './reflections.service';

@Controller('reflections')
export class ReflectionsController {
  constructor(private readonly reflectionsService: ReflectionsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findByUser(@Req() _req: Express.Request) {
    const userId = 1;
    return this.reflectionsService.findByUser(userId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Post()
  createReflection(@Body() createReflectionsDto: CreateReflectionsDto) {
    const userId = 1;
    return this.reflectionsService.createReflection(createReflectionsDto, userId);
  }
}
