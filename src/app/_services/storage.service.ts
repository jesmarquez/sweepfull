import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor() {};

  clean(): void {
    window.sessionStorage.clear();

  }

  public isLoggedIn(): boolean {

    return false;

  }
}