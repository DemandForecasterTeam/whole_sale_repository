import React, { useState } from 'react';

const FormDropdown = ({ purposes, onFormChange }) => {
    const [selectedPurpose, setSelectedPurpose] = useState(null);

    const handlePurposeChange = (event) => {
        const selectedId = parseInt(event.target.value);
        const selectedPurpose = purposes.find(p => p.id === selectedId);
        setSelectedPurpose(selectedPurpose);
        onFormChange(selectedPurpose); 
    };

    return (
        <select value={selectedPurpose ? selectedPurpose.id : ''} onChange={handlePurposeChange}>
            <option value="">Select Purpose</option>
            {purposes.map(purpose => (
                <option key={purpose.id} value={purpose.id}>
                    {purpose.name}
                </option>
            ))}
        </select>
    );
};

export default FormDropdown;