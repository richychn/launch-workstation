import React from 'react';
import CreateWorkstation from './CreateWorkstation';
import useWorkstations from './useWorkstations';

const App = () => {
    const [workstations, addWorkstation, addUrl, openWorkstation, deleteWorkstation] = useWorkstations();

    return (
        <div className="App">
            <div className="workstation-container">
                <h3>Launch Workstation</h3>
                {workstations.map(ws => (
                    <div className="workstation">
                        <p>{ws.label}</p>
                        <div className="buttons">
                            <p onClick={() => openWorkstation(ws.id)}><i className="rocket icon" /></p>
                            <p onClick={() => addUrl(ws.id)}><i className="plus icon" /></p>
                            <p onClick={() => {deleteWorkstation(ws.id)}}><i className="trash icon" /></p>
                        </div>
                    </div>
                ))}
            </div>
            <CreateWorkstation newWorkstation={addWorkstation} />
        </div>
    )
}

export default App;