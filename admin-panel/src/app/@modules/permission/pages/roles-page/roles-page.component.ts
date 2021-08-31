import { Component, OnInit } from '@angular/core';
import {
  IBaseFilter,
  IBaseFilterPayload,
  IBaseResponse,
} from '@shared/interfaces/base.interfaces';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { NzNotificationService } from 'ng-zorro-antd/notification';
import { PathsEnum } from '@shared/enums/paths.enum';
import { RoleService } from '@shared/services/role/role.service';
import { StaticEnum } from '@shared/enums/static.enum';

@UntilDestroy()
@Component({
  selector: 'app-roles-page',
  templateUrl: './roles-page.component.html',
  styleUrls: ['./roles-page.component.scss'],
})
export class RolesPageComponent implements OnInit {
  readonly routePathsEnum = PathsEnum;
  loading: boolean = false;

  response: IBaseFilterPayload | any = {
    data: [],
    page: 0,
    take: 0,
    total: 0,
  };

  constructor(
    private roleService: RoleService,
    private notificationService: NzNotificationService
  ) {}
  ngOnInit(): void {
    this.loadData({ page: 1, take: 10 });
  }
  ngOnDestroy(): void {
    this.response = {
      data: [],
      page: 0,
      take: 0,
      total: 0,
    };
  }

  //filter
  loadData(options: IBaseFilter) {
    this.loading = true;
    this.roleService
      .filter(options)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.loading = false;
        this.response = {
          data: res.payload?.data,
          page: options.page,
          take: 10,
          total: res.total,
        };
      });
    this.loading = false;
  }

  //delete
  onDelete(id: string) {
    this.roleService
      .delete(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: IBaseResponse) => {
        this.notificationService.success(StaticEnum.DELETED_SUCCESS, '');
        this.response.data = this.response.data.filter(
          (x: any) => x.id !== res.payload.id
        );
      });
  }

  onCurrentPageDataChange(currentPage: number) {
    this.loadData({ page: currentPage, take: 10 });
  }
}