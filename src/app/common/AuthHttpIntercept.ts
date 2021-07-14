import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('token');
        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', token),
            })
        }
        return next.handle(req);
    }
}