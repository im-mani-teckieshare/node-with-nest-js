import { Test } from '@nestjs/testing';
import { OrganizationController } from './organization.controller';

describe('Organization Controller', () => {
  let controller;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [OrganizationController],
    }).compile();

    controller = module.get(OrganizationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
