import { IsEnum, IsInt, IsString, Length } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
import { StatusType } from "../../../Enums/status.enum";

export class NoteDto {

  @ApiProperty({ example: 0 })
  @IsInt()
  readonly id: number;

  @ApiProperty({ example: "Who made this swagger?" })
  @IsString()
  @Length(1, 50)
  readonly title: string;

  @ApiProperty({ example: "We will never know" })
  @IsString()
  @Length(1, 400)
  readonly content: string;

  @ApiProperty()
  @IsEnum(StatusType)
  readonly status: StatusType;

}