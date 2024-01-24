import './InputLink.css';
import './Responsive.css'
import React, { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const InputLink: React.FC = () => {
    const [originalUrl, setOriginalUrl] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [shortedUrl, setShortedUrl] = useState('');
    const [copied, setCopied] = useState(false);
    const [inputError, setInputError] = useState(false);

    const handleShorten = async (e:any) => {
        e.preventDefault();
        
        try {
            if (inputValue === '') {
                setInputError(true);
                return;
            }

            setInputError(false);

            const response = await axios.post('http://localhost:3001/api/shorten', {
                url: inputValue,
            });

            setOriginalUrl(inputValue);
            setShortedUrl(response.data.shortenedUrl || '');
        } catch (error) {
            console.error(error);
        }
    };

    function handleCopy() {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    }

    return (
        <div className='container'>
            <div className="input-wraper">
                <form>
                    <input
                        className={`shorten-input ${inputError ? 'error-border' : ''}`}
                        type="text"
                        placeholder='Shorten a link here...'
                        onChange={(e) => setInputValue(e.target.value)}
                    />

                    <button onClick={handleShorten} className='shorten-btn' id='short-btn'>
                        Shorten It!
                    </button>
                </form>
            </div>

            {inputError && <span style={{ display: 'block' }} className="error-message">Input cannot be empty!</span>}

            {shortedUrl && (
                <div className="input-list">
                    <div className="input-single">
                        <div className="original-link">
                        {originalUrl}
                        </div>
                        
                        <div className="link-shorted">
                            <a target='_blank' className='link-url' id='link-url'>
                                {shortedUrl}
                            </a>
                            <CopyToClipboard text={shortedUrl} onCopy={handleCopy}>
                                <button className='btn-copy'>{copied ? 'Copied!' : 'Copy'}</button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InputLink;
