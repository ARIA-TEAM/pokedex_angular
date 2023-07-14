import { Injectable } from '@angular/core'
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private _isLoading = new Subject<boolean>()

  constructor() { }

  public getIsLoading(): Observable<boolean> {
    return this._isLoading.asObservable()
  }

  public onShow() {
    this._isLoading.next(true)
  }

  public onHide() {
    this._isLoading.next(false)
  }
}
