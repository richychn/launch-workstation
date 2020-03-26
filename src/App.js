import React from 'react';
import CreateWorkstation from './CreateWorkstation';
import useWorkstations from './useWorkstations';
import ShowWorkstation from './ShowWorkstation';

const App = () => {
    const [workstations, addWorkstation, addUrl, openWorkstation, deleteWorkstation, removeUrl] = useWorkstations();

    return (
        <div className="App">
            <div className="workstation-container">
                <h3>Launch Workstation</h3>
                {workstations.map(ws => (
                    <ShowWorkstation key={ws.id} ws={ws} use={[addUrl, openWorkstation, deleteWorkstation, removeUrl]} />
                ))}
            </div>
            <CreateWorkstation newWorkstation={addWorkstation} />
        </div>
    )
}

export default App;