import "@/App.css";

import Home from "@/pages/Home";

const App = () => (
    <div className="text-light-foreground dark:text-dark-foreground text-xs md:text-sm">
        <main className="bg-light-background dark:bg-dark-background p-2 h-screen w-screen">
            <Home />
        </main>
    </div>
);

export default App;
