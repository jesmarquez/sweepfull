import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
})
export class PlacesComponent {
  mode: string = "show";
  @ViewChild('placeName') placeNameSearchInputRef!: ElementRef;


  onSearch() {
    const placeName = this.placeNameSearchInputRef.nativeElement.value;
    console.log('search:' + placeName);
  }
  onClickAddPlace() {
    console.log('add place');
    this.mode = "edit";

  }

}
