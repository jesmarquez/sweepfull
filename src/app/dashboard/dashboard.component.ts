
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { StorageService } from "../_services/storage.service";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class DashboardComponent implements OnInit {
  currentUser: any;

  constructor (private storageService: StorageService) {

  }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser);
  }


}
