import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UsersService } from '@shared/services/users/users.service';
import { updateUserAction } from '@state/users/users.actions';

@UntilDestroy()
@Component({
  selector: 'app-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrls: ['./update-user-page.component.scss'],
})
export class UpdateUserPageComponent implements OnInit {
  validateForm!: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private userService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    this.userId = id;
    this.getUserById(id);
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.invalid === false) {
      const { name, email } = this.validateForm.value;
      this.store.dispatch(updateUserAction({ id: this.userId, name, email }));
    }
  }

  // Get user info
  getUserById(id: string) {
    this.userService
      .getById(id)
      .pipe(untilDestroyed(this))
      .subscribe((res: any) => {
        this.validateForm.setValue({
          name: res.payload.name,
          email: res.payload.email,
        });
      });
  }
}