import React from 'react';
import styles from '../../../styles/Pricing/ShowMore/index.module.css'
import List from '../ShowMore/List/index';

function Index({items}){
    //pricing items
    const pricing_items = [{
        c1: "Yearly payment", c2: "0$", c3: "50$"
    }, {
        c1: "Monthly payment", c2: "0$", c3: "5$"
    }
    ];

    //features items
    const features_items = [{
        c1: "Sync in all device", c2: false, c3: true
    }, {
        c1: "Multiple themes", c2: false, c3:true
    }, {
        c1: "Cloud Storage", c2: false, c3:true
    }, {
        c1: "Export model in different format", c2: false, c3:true
    }, {
        c1: "Host app in store", c2: false, c3:true
    }, {
        c1: "Cloud computing for AI", c2: false, c3:true
    }, {
        c1: "Upload data from other device", c2: false, c3:true
    }, {
        c1: "Upload data from web and local", c2: true, c3:true
    }, {
        c1: "Blue check mark in AI store", c2: false, c3:true
    }
    ];

    //support items
    const support_items = [{
        c1: "24hrs support", c2: false, c3: true
    }, {
        c1: "3 sessions with our engineer", c2:false, c3:true
    }, {
        c1: "Mail support", c2: true, c3:true
    }
    ];

    return(
        <div className={styles.showmore}>
            <List
                title="Pricing"
                items={pricing_items}
            /><br/>
            <List
                title="Features"
                items={features_items}
            /><br/>
            <List
                title="Support"
                items={support_items}
            />
        </div>
    )
}

export default Index;