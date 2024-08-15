import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-new-place',
  standalone: true,
  imports: [],
  templateUrl: './new-place.component.html',
  styleUrl: './new-place.component.css'
})
export class NewPlaceComponent {
  @ViewChild('placeNameInput') placeNameInputRef!: ElementRef;
  @ViewChild('placeCodeInput') placeCodeInputRef!: ElementRef;
  @ViewChild('placeLocationInput') placeLocationRef!: ElementRef;

  @Output() placeSubmitted = new EventEmitter<string>();
  @Output() cancelSubmit= new EventEmitter<string>();

  constructor(private dataService: DataService) {

  }

  onSubmitPlace() {

    const placeName = this.placeNameInputRef.nativeElement.value;
    const placeCode = this.placeCodeInputRef.nativeElement.value;
    const placeLocation = this.placeLocationRef.nativeElement.value;

    this.dataService.addPlace(placeName, placeCode, placeLocation, "clean");

    this.placeSubmitted.emit("success");
    console.log('submit place :' + placeName + " code:" + placeCode);
    // console.log(this.dataService.places);
  }

  onCancelPlace() {
    // this.cancelSubmit.emit("show");
    this.cancelSubmit.emit("show");
    console.log('cancel');
  }
}
