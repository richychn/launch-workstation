import React from 'react';

const CreateWorkstation = ({ newWorkstation }) => {
    const [label, setLabel] = React.useState('');

    return (
        <div className="create-workstation-form">
            <input 
                placeholder="New Workstation Name"
                onChange={e => setLabel(e.target.value)}
                value = {label}
            />
            <p onClick={() => {newWorkstation(label); setLabel('')}}>
                Create
            </p>
        </div>
    )
}

export default CreateWorkstation;