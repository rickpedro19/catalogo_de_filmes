import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "./entity/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private readonly JwtService: JwtService
    ){}

    async createToken(email: string){
        return {
            Token: this.JwtService.sign({
                sub: email
                
            },{
                expiresIn: "1 days"
            })
        }  
        
    }

    checkToken(token: string){
        try{
            
            return this.JwtService.verify(token);
        }catch(error){
            
            throw new BadRequestException(error)
        }
    }

    login(email: string, password: string){
        const user = this.userRepository.findOneBy({
            email,
            password,
        })

        if(!user){
            throw new UnauthorizedException('Email e/ou senha incorretos')
        }

        return this.createToken(email)
    }
}