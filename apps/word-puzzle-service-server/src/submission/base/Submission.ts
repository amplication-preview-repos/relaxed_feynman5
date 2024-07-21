/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { Student } from "../../student/base/Student";
import { Puzzle } from "../../puzzle/base/Puzzle";

@ObjectType()
class Submission {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  word!: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score!: number | null;

  @ApiProperty({
    required: false,
    type: () => Student,
  })
  @ValidateNested()
  @Type(() => Student)
  @IsOptional()
  student?: Student | null;

  @ApiProperty({
    required: false,
    type: () => Puzzle,
  })
  @ValidateNested()
  @Type(() => Puzzle)
  @IsOptional()
  puzzle?: Puzzle | null;
}

export { Submission as Submission };
