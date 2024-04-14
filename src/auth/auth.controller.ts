import { Body, Controller, Headers, Post, UseGuards } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth.dto";
import { AuthService } from "./auth.service";
import { AuthGuard } from "src/guards/auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";


@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('login')
    async login(@Body() {email, password}: AuthLoginDTO){
        return this.authService.login(email, password)
    }

    @ApiBearerAuth()
    @UseGuards(AuthGuard)
    @Post('check')
    async check(){

        return 'ok'
        
    }
}