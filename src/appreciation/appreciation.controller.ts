import { Body, Controller, Get, Post, Query, Param } from '@nestjs/common';
import { AppreciationService } from './appreciation.service';
import { CreateAppreciationDto } from './dto/create-appreciation.dto';
import { GetAppreciationDto } from './dto/get-appreciation.dto';
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
  retrieveAppreciations(@Query() query: RetrieveAppreciationsDto) {
    return this.appreciationService.retrieve(query.userId);
  }

  @Get(':id')
  getAppreciation(@Param() params: GetAppreciationDto) {
    return this.appreciationService.get(params.id);
  }
}
