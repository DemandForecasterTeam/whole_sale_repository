import React, { useState, FormEvent } from 'react';
import logo from "./logo.svg";
import "./App.css";

function App() {
    
    const [prompts, setPrompts] = useState<string[]>([]);
    const [temperatures, setTemperatures] = useState<number[]>([]);
    const [maxTokensList, setMaxTokensList] = useState<number[]>([]);
    const [response, setResponse] = useState('');
    
    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
    
        const queryString = new URLSearchParams({
            prompts: prompts.join(','), // Join the array into a comma-separated string
            temperatures: temperatures.map(String).join(','), // Convert numbers to strings and join
            max_tokens_list: maxTokensList.map(String).join(','), // Convert numbers to strings and join
        }).toString();
    
        const url = `http://localhost:5000/generate?${queryString}`; // Replace with your LLM endpoint
    
        try {
            const res = await fetch(url);
            const data = await res.json();
            setResponse(data.response);
        } catch (error) {
            console.info('URL: ', url);
            console.error('Error fetching data:', error);
            setResponse('Error fetching data.');
        }
    };
    
    const handlePromptsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
        setPrompts(selectedOptions);
    };
    
    const handleTemperaturesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => parseFloat(option.value));
        setTemperatures(selectedOptions);
    };
    
    const handleMaxTokensChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions).map(option => parseInt(option.value));
        setMaxTokensList(selectedOptions);
    };

    
    return (
        <div className="App">
            <div className="Main">
                <form onSubmit={handleSubmit}>
                <label>
                    Prompts:
                    <select value={prompts} onChange={handlePromptsChange}>
                        <option value="Prompt 1">Prompt 1</option>
                        <option value="Prompt 2">Prompt 2</option>
                        <option value="Prompt 3">Prompt 3</option>
                        <option value="Prompt 4">Prompt 4</option>
                    </select>
                </label>
                <br />
                <label>
                    Temperatures:
                    <select value={temperatures.map(String)} onChange={handleTemperaturesChange}>
                        <option value="0.5">0.5</option>
                        <option value="1.0">1.0</option>
                        <option value="1.5">1.5</option>
                        <option value="2.0">2.0</option>
                    </select>
                </label>
                <br />
                <label>
                    Max Tokens:
                    <select value={maxTokensList.map(String)} onChange={handleMaxTokensChange}>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="500">500</option>
                    </select>
                </label>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                {response && (
                    <div>
                        <h2>Response:</h2>
                        <p>{response}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;








