import { Module } from '@nestjs/common';
import { AppreciationService } from './appreciation.service';
import { AppreciationController } from './appreciation.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Appreciation } from './entities/appreciation.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Appreciation])],
  controllers: [AppreciationController],
  providers: [AppreciationService],
})
export class AppreciationModule {}
