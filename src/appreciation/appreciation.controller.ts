import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppreciationService } from './appreciation.service';
import { CreateAppreciationDto } from './dto/create-appreciation.dto';
import { RetrieveAppreciationsDto } from './dto/retrieve-appreciations.dto';

@Controller('appreciation')
export class AppreciationController {
  constructor(private readonly appreciationService: AppreciationService) {}
  // @UseGuards(AuthGuard('jwt'))
  @Post()
  createAppreciations(@Body() createDto: CreateAppreciationDto) {
    return this.appreciationService.create(createDto, createDto.userId);
  }

  // @UseGuards(AuthGuard('jwt'))
  @Get()
  getAppreciations(@Query() params: RetrieveAppreciationsDto) {
    return this.appreciationService.retrieve(params.userId);
  }
}
