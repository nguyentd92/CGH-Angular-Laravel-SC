import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GetBannersResponse, GetDiscountProgramsResponse, GET_BANNERS_API, GET_DISCOUNT_PROGRAMS_API } from '../_api/landing-page.api';
import { MOCK_DISCOUNT_PROGRAMS } from './discount-programs.mock';
import { MOCK_BANNERS } from './banners.mock';

@Injectable()
export class MockBackEndInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check url, if match then return somethings
    const { url } = req;

    switch(url) {
      case GET_DISCOUNT_PROGRAMS_API:
        return of(new HttpResponse<GetDiscountProgramsResponse>({
          status: 200,
          body: {
            data: MOCK_DISCOUNT_PROGRAMS
          }
        }));
      case GET_BANNERS_API:
        return of(new HttpResponse<GetBannersResponse>({
          status: 200,
          body: {
            data: MOCK_BANNERS
          }
        }));
    }

    return next.handle(req);
  }
}
