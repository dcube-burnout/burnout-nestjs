import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppreciationService } from './appreciation.service';
import { CreateAppreciationDto } from './dto/create-appreciation.dto';

@Controller('appreciation')
export class AppreciationController {
  constructor(private readonly appreciationService: AppreciationService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post()
  createAppreciations(@Body() createDto: CreateAppreciationDto, @Req() req: Express.Request) {
    const userId = (req.user as any).userId;
    return this.appreciationService.create(createDto, userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAppreciations(@Req() req: Express.Request) {
    const userId = (req.user as any).userId;
    return this.appreciationService.retrieve(userId);
  }
}
