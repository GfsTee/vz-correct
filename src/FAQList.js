import React from 'react';
import datafaq from './datafaq.js'
import FAQItem from './FAQItem.js';



const FAQList = () => {
    return (
        <div className="faq-list">
            {datafaq.map((data, i) => <FAQItem key={i} data={data} />)}
        </div>
    );
}

export default FAQList;