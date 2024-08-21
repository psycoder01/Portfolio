import '@/App.css';

import Home from '@/pages/Home'

const App = () =>
    <div className="text-light-foreground dark:text-dark-foreground h-screen w-screen min-w-max text-xs md:min-w-full md:text-base">
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
            <Home />
        </main>
    </div>

export default App;
