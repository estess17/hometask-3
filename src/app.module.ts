import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { NotesModule } from "./resources/notes/notes.module";
import { SequelizeModule } from "@nestjs/sequelize";


@Module({
  imports: [
    NotesModule,
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "postgres",
      port: 5432,
      username: "postgres",
      password: "pass123",
      database: "hometask-3",
      autoLoadModels: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
