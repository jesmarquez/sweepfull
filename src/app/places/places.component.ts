import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../data.service';
import { Place } from '../model/place-model';
import { NgFor, NgIf } from '@angular/common';
import { NewPlaceComponent } from './new-place/new-place.component';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [NgFor, RouterLink, RouterLinkActive, NewPlaceComponent, NgIf],
  templateUrl: './places.component.html',
  styleUrl: './places.component.css',
  providers: [DataService]
})
export class PlacesComponent {
  mode: string = "show";
  places: Place[] = [];

  @ViewChild('placeName') placeNameSearchInputRef!: ElementRef;

  constructor(private dataService: DataService) {
    console.log(dataService.places);
  }

  ngOnInit() {
    this.places = this.dataService.places;

  }
  onSearch() {
    const placeName = this.placeNameSearchInputRef.nativeElement.value;
    console.log('search:' + placeName);
  }
  onClickAddPlace() {
    console.log('add place');
    this.mode = "edit";

  }

  onPlaceSubmitted(submitted: any) {
    this.mode = 'show';
    console.log('place submittes' + submitted);

  }

  onCancelSubmit( mode: string) {
    this.mode = mode;
    
  }

}
