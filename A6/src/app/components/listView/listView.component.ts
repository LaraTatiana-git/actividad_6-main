import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../interfaces/iuser.interface';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-list-view',
  standalone: true,
  imports: [CommonModule, UserCardComponent],
  templateUrl: './listView.component.html',
  styleUrls: ['./listView.component.css']
})
export class ListViewComponent implements OnInit {
  uServices = inject(UsersService);
  usersArray: Iuser[] = [];
  usersPerPage: number = 8;
  actualPage: number = 1;
  DB_total_users = 1;
  listView_total_pages = 1;

  async ngOnInit() {
    this.uServices.setUsersPerPage(this.usersPerPage);

    try {
      this.DB_total_users = await this.uServices.getDBtotalUsers();
    } catch (error) {
      console.log(error);
    }
    this.listView_total_pages = this.DB_total_users % this.usersPerPage === 0 ? (this.DB_total_users / this.usersPerPage) : Math.trunc(this.DB_total_users / this.usersPerPage) + 1;
    console.log("Numero maxim de pagines:", this.listView_total_pages);
    this.loadPage();
  }

  trackByUserId(index: number, user: Iuser): number {
    return user.id ?? 0;
  }

  previousPage(): void {
    // Logic for previous page
  }

  nextPage(): void {
    // Logic for next page
  }

  loadPage(): void {
    // Logic to load the page
  }
}