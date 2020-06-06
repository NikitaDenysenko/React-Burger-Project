import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => ( /* ({name: Nick, age:19}) sets in line 6*/
        <div className={className}>
            <WrappedComponent {...props}/> 
        </div>
    );
};

export default withClass;