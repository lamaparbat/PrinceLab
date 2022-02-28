import React from 'react';
import '../NewFeatures/Index.css';

const Index = () => {
    return(
        <div className={"container new_features"}>
            <div className={"new_features_row"}>
                <div className={"new_features_row_header"}>
                    <h1>
                        What's <span className={"text-primary"}>new</span>
                    </h1>
                    <h3>All new features & bug fixes</h3><hr />
                </div>
            </div>
        </div>
    )
}

export default Index;