import INote from '@/resources/note/note.interface';


class NoteService {
    notes: INote[] = [
        {
            id: 0,
            name: 'Shopping list',
            created: 'April 20,2021',
            category: 'Task',
            content: 'Tomatoes, bread, water',
            dates: '',
            isArchive: false,
        },
        {
            id: 1,
            name: 'New Feature',
            created: 'May 05,2021',
            category: 'Idea',
            content: 'Implement new task, dates: 3/5/2021, 5/5/2021',
            dates: '3/5/2021, 5/5/2021',
            isArchive: false,
        },
        {
            id: 2,
            name: 'Why?',
            created: 'June 09,2022',
            category: 'Random Thought',
            content: 'Why aren\'t blueberries blue?',
            dates: '',
            isArchive: false,
        },
        {
            id: 3,
            name: 'Books',
            created: 'December 31,2021',
            category: 'Task',
            content: 'The Lean Startup',
            dates: '',
            isArchive: false,
        },
        {
            id: 4,
            name: 'Refactoring',
            created: 'July 12,2022',
            category: 'Idea',
            content: 'We need a redesign by 19.04.2022',
            dates: '19.04.2022',
            isArchive: false,
        },
        {
            id: 5,
            name: 'Wait what',
            created: 'April 27,2022',
            category: 'Random Thought',
            content: 'When you wait for a waiter, you become a waiter.',
            dates: '',
            isArchive: false,
        },
        {
            id: 6,
            name: 'This is note',
            created: 'December 31,2021',
            category: 'Random Thought',
            content: 'note content',
            dates: '',
            isArchive: false,
        },
    ];

    // Create a new note
    public async create(name: string, category: string, content: string): Promise<INote> {
        try {
            let dates = content.match(/(\d{1,2}([.\-/])\d{1,2}([.\-/])\d{4})/g);

            const note: INote = {
                id: Math.random(),
                name,
                created: new Date().toLocaleDateString('default', {month: 'long', day: '2-digit', year: 'numeric'}),
                category,
                content,
                dates: dates ? dates.join(', ') : '',
                isArchive: false,
            };

            this.notes.push(note);

            return note;
        } catch (error) {
            throw new Error('Unable to create note');
        }
    }

    // Get all notes
    public async getAll(): Promise<INote[]> {
        try {
            return this.notes;
        } catch (error) {
            throw new Error('Unable to get notes');
        }
    }

    // Get note by id
    public async getById(id: string): Promise<INote | undefined> {
        try {
            return this.notes.filter(note => note.id === +id)[0];
        } catch (error) {
            throw new Error('Unable to get note');
        }
    }

    // Delete note
    public async delete(id: string): Promise<INote | undefined> {
        try {
            const note = this.notes.filter(note => note.id === +id)[0]
            this.notes = this.notes.filter(note => note.id !== +id);

            return note;
        } catch (error) {
            throw new Error('Unable to delete note');
        }
    }
}

export default NoteService;
