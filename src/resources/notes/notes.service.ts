import { Injectable } from "@nestjs/common";
import { CreateNoteDto } from "./dto/create-note.dto";
import { UpdateNoteDto } from "./dto/update-note.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Note } from "./entities/note.entity";
import getDatesFromString from "../../utils/getDatesFromString";


@Injectable()
export class NotesService {
  constructor(@InjectModel(Note) private noteModel: typeof Note) {
  }

  create(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = {
      ...createNoteDto,
      dates: getDatesFromString(createNoteDto.content)
    };

    return this.noteModel.create(note);
  }

  findAll(): Promise<Note[]> {
    return this.noteModel.findAll({order: ['id']});
  }

  findOne(id: number): Promise<Note> {
    return this.noteModel.findOne({ where: { id } });
  }

  update(id: number, updateNoteDto: UpdateNoteDto): Promise<any> {
    const note = {
      ...updateNoteDto,
      dates: getDatesFromString(updateNoteDto.content)
    };

    return this.noteModel.update(note, { where: { id } });
  }

  remove(id: number): Promise<any> {
    return this.noteModel.destroy({ where: { id } });
  }

  async getStats() {
    const notes = await this.noteModel.findAll();

    return [
      {
        category: "Task",
        active: notes.filter(note => note.category === "Task" && !note.isArchive).length,
        archived: notes.filter(note => note.category === "Task" && note.isArchive).length
      },
      {
        category: "Idea",
        active: notes.filter(note => note.category === "Idea" && !note.isArchive).length,
        archived: notes.filter(note => note.category === "Idea" && note.isArchive).length
      },
      {
        category: "Random Thought",
        active: notes.filter(note => note.category === "Random Thought" && !note.isArchive).length,
        archived: notes.filter(note => note.category === "Random Thought" && note.isArchive).length
      }
    ];
  }
}
