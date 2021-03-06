import { ApiProperty } from '@nestjs/swagger';

export class RolePermissionUpdateDTO {
  @ApiProperty({ required: true, type: String })
  readonly role: any;

  @ApiProperty({ required: true, type: String })
  readonly permission: any;
}
