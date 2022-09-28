import { Module } from "@nestjs/common";
import { NotesService } from "./notes.service";
import { NotesController } from "./notes.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Note } from "./entities/note.entity";


@Module({
  imports: [SequelizeModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {
}
