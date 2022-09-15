import 'module-alias/register';
import App from './app';
import NoteController from '@/resources/note/note.controller';


const app = new App(
    [
        new NoteController()
    ],
    3000,
);

app.listen();
