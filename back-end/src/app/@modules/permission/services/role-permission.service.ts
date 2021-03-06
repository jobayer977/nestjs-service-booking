import { BaseService } from '@application/base';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolePermission } from '../entities/role-premission.entity';

/*
https://docs.nestjs.com/providers#services
*/

@Injectable()
export class RolePermissionService extends BaseService<RolePermission> {
  constructor(
    @InjectRepository(RolePermission)
    private rolePermissionRepository: Repository<RolePermission>,
  ) {
    super(rolePermissionRepository, RolePermission.name);
  }
}
