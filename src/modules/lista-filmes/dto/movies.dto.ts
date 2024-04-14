import { IsNumber, IsString } from "@nestjs/class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class moviesDTO{

    @IsNumber()
    id!: number;

    @ApiProperty({
        example: "Titanic",
    })
    @IsString()
    titulo!: string;

    @ApiProperty({
        example: "James Cameron",
    })
    @IsString()
    diretor!: string;

    @ApiProperty({
        example: 1997,
    })
    @IsNumber()
    anoLançamento!: number;

    @ApiProperty({
        example: "Romance",
    })
    @IsString()
    genero!: string;
}