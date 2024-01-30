import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpInterceptorFn, HttpRequest, HttpHandler } from '@angular/common/http';
import { UserStoreService } from './services/user-store.service';

@Injectable()
export class ArticleAppInterceptor implements HttpInterceptor {
constructor(private userStoreService: UserStoreService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Mirem si l'usuari esta autenticat
    const authToken = this.userStoreService.getAuthToken();

    // Clonem la solicitud i afegim el token
    if (authToken) {
      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${authToken}`
        }
      });
      return next.handle(authReq);
    }

    // Si l'usuari no esta autenticat, simplement passem la solicitud sense modificar
    return next.handle(req);
  }
}

// export const articleAppInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };
