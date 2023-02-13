import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TeamsModule } from './teams/teams.module';
import { AuthModule } from './auth/auth.module';
import { SessionsModule } from './sessions/sessions.module';
import { AppreciationModule } from './appreciation/appreciation.module';
import { ReflectionsModule } from './reflections/reflections.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MikroOrmModule.forRoot({
      autoLoadEntities: true,
      type: 'postgresql',
      dbName: process.env.DATABASE_NAME,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      debug: process.env.NODE_ENV === 'local',
      cache: { enabled: process.env.NODE_ENV === 'local' },
      metadataProvider: TsMorphMetadataProvider,
    }),
    UsersModule,
    TeamsModule,
    AuthModule,
    SessionsModule,
    AppreciationModule,
    ReflectionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
