import React, { useEffect, useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';



export const Contact = () => {
    const [copied, setCopied] = useState(false);

    const renderCopied = () => {
        return (
            <div><i className="fas fa-copy"></i> Copier</div>
        );
    };

    useEffect( () => {
        setTimeout(() => {
            if (copied) setCopied(false)
        }, 2000);
    }, [copied]);
    
    return (
        <div className='wrapper'>
            <div className='contact'>
                <div>N'hésitez pas à me contacter à cette adresse :</div>
                <div className='contact_adress'>
                    <h3>astram59@gmail.com</h3>
                    <CopyToClipboard text='astram59@gmail.com' 
                                    onCopy={()=> setCopied(true)}>
                        <button className='button-copy'>
                            {copied ? 'Copié !' : renderCopied()}
                        </button>
                    </CopyToClipboard>
                </div>
                
            </div> 
        </div>
    );
    
};