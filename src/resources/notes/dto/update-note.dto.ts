import { IsBoolean, IsIn, IsInt, IsNotEmpty, IsString } from "class-validator";


export class UpdateNoteDto {
  @IsInt()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsIn(["Task", "Random Thought", "Idea"])
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  dates: string;

  @IsBoolean()
  @IsNotEmpty()
  isArchive: boolean;
}
