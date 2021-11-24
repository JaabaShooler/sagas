import React from 'react';
import "./Tabs.css";

export const Tabs = ({currentTab, setCurrentTab}) => {
    const tabs = ['Users', 'Posts'];

    return (
        <div className="tabs">
            {tabs
                .map(
                    (t,i) => (
                        <div 
                            key={t} 
                            className={`tabs--item ${i === currentTab && 'current'}`}
                            onClick={() => setCurrentTab(i)}
                            > 
                        { t } 
                        </div>)
                    )}
        </div>
    )
}