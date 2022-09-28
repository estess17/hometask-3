import { IsIn, IsNotEmpty, IsString } from "class-validator";


export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsIn(["Task", "Random Thought", "Idea"])
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
