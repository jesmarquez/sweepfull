
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { StorageService } from "../_services/storage.service";
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterLink, RouterLinkActive]
})
export class DashboardComponent implements OnInit {
  currentUser: any;

  constructor (private storageService: StorageService,
                private authService: AuthService,
                private router: Router) {

  }
  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser);
  }

  onLogout() {
    this.authService.logout().subscribe({
      next: data => {
        this.storageService.clean();
        this.router.navigate(['/']);
      }
    })
    console.log('logout');
  }

}
