import React from 'react';
import styles from '../../../../styles/Pricing/List/index.module.css'
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function Index({title, items}) {
    return (
        <div className={styles.show_more_list}>
            <h4>{title}</h4>

            {
                items.map((list, index) => {
                    return (
                        <div className={styles.show_more_list_div} key={index}>
                            <span key={index+1}>{list.c1}</span>
                            <span key={index+2}>
                                    {
                                        (title === "Pricing") ?
                                            list.c2 :
                                            (list.c2 === true) ?
                                            <DoneIcon className={"p-1 text-success "+ styles.successIcon} key={index+3} /> :
                                            <CloseIcon className={"p-1 "+ styles.wrongIcon} key={index+4} />
                                    }
                                </span>
                            <span key={index+5}>
                                    {
                                        (title === "Pricing") ?
                                            list.c3 :
                                            (list.c3 === true) ?
                                            <DoneIcon className={"p-1 text-success "+ styles.successIcon} key={index+6} /> :
                                            <CloseIcon className="p-1" key={index+7} />
                                    }
                                </span>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Index;