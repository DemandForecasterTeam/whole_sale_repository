import React, { useEffect, useState } from 'react';
import FormDropdown from './components/FormDropdown';

const PurposeList = () => {
    const [purposes, setPurposes] = useState([]);

    useEffect(() => {
        fetch('purposes.json')
            .then(response => response.json())
            .then(data => setPurposes(data));
    }, []); 

    return (
        <div>
            {/* ... other content ... */}
            <FormDropdown purposes={purposes} /> 
            {/* ... other content ... */}
        </div>
    );
};

export default PurposeList;