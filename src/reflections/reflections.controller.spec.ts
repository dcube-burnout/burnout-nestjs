import { Test, TestingModule } from '@nestjs/testing';
import { ReflectionsController } from './reflections.controller';
import { ReflectionsService } from './reflections.service';

describe('ReflectionsController', () => {
  let controller: ReflectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReflectionsController],
      providers: [ReflectionsService],
    }).compile();

    controller = module.get<ReflectionsController>(ReflectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
