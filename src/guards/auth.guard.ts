import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly authService: AuthService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const {authorization} = context.switchToHttp().getRequest().headers
        
        try{
            
            this.authService.checkToken((authorization ?? '').split(' ')[1])
            
            
            return true

        }catch(error){

            console.log('erro:', error);
            
            return false

        }
    }
}