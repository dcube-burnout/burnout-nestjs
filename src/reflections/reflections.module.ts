import { Module } from '@nestjs/common';
import { ReflectionsService } from './reflections.service';
import { ReflectionsController } from './reflections.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Reflection } from './entities/reflections.entity';
import { SessionsModule } from 'src/sessions/sessions.module';
import { UsersModule } from 'src/users/users.module';

@Module({
	imports: [MikroOrmModule.forFeature([Reflection]), SessionsModule, UsersModule],
	controllers: [ReflectionsController],
	providers: [ReflectionsService],
	exports: [ReflectionsService],
})
export class ReflectionsModule { }