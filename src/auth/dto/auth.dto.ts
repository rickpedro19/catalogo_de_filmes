import { IsEmail, IsString, MinLength } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class AuthLoginDTO{

    @ApiProperty({
        example: "teste@teste.com",
    })
    @IsEmail()
    email!: string;

    @ApiProperty({
        example: "teste123",
    })
    @IsString()
    @MinLength(6)
    password: string;
}