import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavBarService {
  private _menuOpen$ = new BehaviorSubject<boolean>(false);
  menuOpen$ = this._menuOpen$.asObservable();

  toggleMenu() {
    this._menuOpen$.next(!this._menuOpen$.value);
  }

  setMenu(open: boolean) {
    this._menuOpen$.next(open);
  }
}
