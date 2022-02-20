import React from 'react';
import '../List/Index.css';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

function Index({title, items}) {
    return (
        <div className="show_more_list">
            <h4>{title}</h4>

            {
                items.map((list, index) => {
                    return (
                        <div className="show_more_list_div" key={index}>
                            <span>{list.c1}</span>
                            <span>
                                    {
                                        (title === "Pricing") ?
                                            list.c2 :
                                            (list.c2 === true) ?
                                                <DoneIcon className="p-1 text-success"/> :
                                                <CloseIcon className="p-1"/>
                                    }
                                </span>
                            <span>
                                    {
                                        (title === "Pricing") ?
                                            list.c3 :
                                            (list.c3 === true) ?
                                                <DoneIcon className="p-1 text-success"/> :
                                                <CloseIcon className="p-1"/>
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