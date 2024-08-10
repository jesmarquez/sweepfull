
import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
