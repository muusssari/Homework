import { IsString, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateNoteDto {

  @ApiProperty({ example: "Who made this swagger?" })
  @IsString()
  @Length(1, 50)
  readonly title: string;

  @ApiProperty({ example: "We will never know" })
  @IsString()
  @Length(1, 400)
  readonly content: string;

}