import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { LoaderService } from '@core/services/loader/loader.service'
import { Observable } from 'rxjs'
import { finalize } from 'rxjs/operators'

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.onShow()

    return next.handle(request).pipe(finalize(() => this.loaderService.onHide()))
  }
}
