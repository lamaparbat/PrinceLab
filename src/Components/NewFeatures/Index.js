import React, {useEffect, useState} from 'react';
import '../NewFeatures/Index.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import $ from "jquery";

//main function
const Index = () => {
    //list of features
    const [version_list, setVersionList] = useState([
        "Beta version v0.1",
        "Beta version v0.2",
        "Beta version v0.3",
        "Beta version v0.4",
        "Beta version v0.5",
        "Beta version v0.6",
    ]);
    const [platform_list, setPlatformList] = useState([
        "MacOS & Windows",
        "Android & IOS"
    ]);

    //version features
    const version_01 = useState([
        "Custom code block is added.",
        "Dark  theme is added. ",
        "Custom python terminal is added.",
        "Import nodes is added.",
        "Micro is added for multiple function.",
    ])
    const version_02 = useState([
        "Shortcut keys is  added.",
        "New Navbar menu is added.",
        "Custom python terminal is added.",
        "New Welcome screen is integrated.",
    ]);
    const version_02_bug = useState([
        "Block dragging is now 2x smother ",
        "Code run time in code block is faster."
    ])
    const version_02_improvement = useState([
        "Native theme color is improved.",
        "Python terminal code execution is 2x faster. "
    ])
    
    
    const version_03 = useState([
        "Custom code block is added.",
        "Dark  theme is added. ",
        "Custom python terminal is added.",
        "Import nodes is added.",
        "Micro is added for multiple function.",
    ])
    const version_03_bug = useState([
        "Navbar of second windows is working now. ",
        "Code block is giving output dynamic."
    ])
    const version_03_improvement = useState([
        "Tron theme is improved. ",
        "Block theme is improved."
    ])
    
    
    const version_04 = useState([
        "New micro is added. ",
        "Numpy extension is added ",
        "Pandas extension is added. ",
        "Update module is added. "
    ])
    const version_04_bug = useState([
        "Short-cut key lag is fixed.  ",
        "Source code is visible for all block ."
    ])
    const version_04_improvement = useState([
        "Increased the performance of code block "
    ])
    
    
    const version_05 = useState([
        "Python packages store is added. ",
        "Dynamic programming is added in code block. "
    ])
    const version_05_bug = useState([
        "Dark theme flickering is fixed"
    ])
    const version_05_improvement = useState([
        "Python terminal is improved "
    ])
    
    const latestBugFixes = useState([
        "Performance boost",
        "Font style",
        "Window responsiveness",
        "Custom themes"
    ])

    //auto scroll to the top when page rendered
    useEffect(()  => {
        $(window).scrollTop({top:0, behavior:"smooth"})
    }, [])

    //current platform and version
    const [cur_platform, setCurPlatform] = useState(platform_list[0]);
    const [cur_version, setCurVersion] = useState(version_list[0]);
    
    //list data
    const [cur_features, setCurFeatures] = useState(version_01);
    const [cur_bug, setCurBugs] = useState([]);
    const [cur_improvement, setCurImprovement] = useState([])

    //custom dropdown button
    const DropdownBtn = ({id, data}) => {
        // update the current item selection
        const setCurrentItem = (id, item) => {
            const version = parseInt(item[item.length - 1]);
            id === "platform" ? setCurPlatform(item) : setCurVersion(item);
            if (version === 1) {
                setCurFeatures(version_01);
                setCurBugs([]);
                setCurImprovement([]);
            } else if (version === 2) {
                setCurFeatures(version_02);
                setCurBugs(version_02_bug);
                setCurImprovement(version_02_improvement)
            } else if (version === 3) {
                setCurFeatures(version_03);
                setCurBugs(version_03_bug);
                setCurImprovement(version_03_improvement)
            } else if (version === 4) {
                setCurFeatures(version_04);
                setCurBugs(version_04_bug);
                setCurImprovement(version_04_improvement)
            } else if (version === 5) {
                setCurFeatures(version_05);
                setCurBugs(version_05_bug);
                setCurImprovement(version_05_improvement)
            }
            // else {
            //     setCurFeatures([]);
            //     setCurBugs([]);
            //     setCurImprovement([])
            // }
        }

        return (
            <div className="dropdown mr-2">
                <button className="btn px-4 rounded-4 text-primary dropdown-toggle shadow-none" type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {
                        id === "platform" ? cur_platform : cur_version
                    }
                </button>
                <div className="dropdown-menu text-primary" aria-labelledby="dropdownMenuButton">
                    {
                        data.map((item, index) => {
                            return (
                                <a
                                    className="dropdown-item"
                                    
                                    key={index}
                                    onClick={() => setCurrentItem(id, item)}
                                >{item}</a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    //custom list container
    const List = ({ id, lists }) => {
        //custom item
        const Item = ({data}) => {
            return(
                <div className={"content_list_item my-3 "}>
                    {
                        id === "feature" ?
                            <FiberManualRecordIcon
                                id="feature_dot" />  :
                            <FiberManualRecordIcon
                                id="bug_dot" />
                    }
                    <span id="content_list_item_text">{data}</span>
                </div>
            )
        }
        return(
            <div className={"content_list"}>
                {
                    lists.length !== 0 && lists[0].map((item ,index) => {
                        return(
                            <Item id={id} data={item} key={index} />
                        )
                    })
                }
            </div>
        )
    }

    //custom header
    const Header = () => {
        return (
            <div className={"new_features_row_header w-75"}>
                <h1>
                    What's <span className={"text-primary"}>new</span>
                </h1>
                <p className={"h4 mb-3 text-center"}>All new features & bug fixes</p>
            </div>)
    }

    //custom navbar
    const Navbar = () => {
        return (
            <div className={"sub_nav d-flex w-75 py-3"}>
                <DropdownBtn
                    id="platform"
                    data={platform_list}
                /><br/>
                <DropdownBtn
                    id="version"
                    data={version_list}
                />
            </div>)
    }

    //custom feature container
    const ListContainer = () => {
        return (
            <div className={"feature_container my-5 w-75 d-flex justify-content-center"}>
                {
                    cur_features.length !== 0 ? 
                        <div className={"features_content d-flex flex-column w-50"}>
                            <h2 className={"fw-bold my-2"}>Features</h2>
                            <List id={"feature"} lists={cur_features} />
                        </div>:null
                }
                {
                    cur_bug.length !== 0 ? 
                        <div className={"features_content bug_content d-flex flex-column w-50"}>
                            <h2 className={"fw-bold my-2"}>Bugs</h2>
                            <List id={"bug"} lists={cur_bug} />
                        </div> : null
                }
                {
                    cur_improvement.length !== 0 ?
                        <div className={"features_content bug_content d-flex flex-column w-50"}>
                            <h2 className={"fw-bold my-2"}>Improvement</h2>
                            <List id={"bug"} lists={cur_improvement} />
                        </div>:null
                }
                {
                    cur_improvement.length === 0 && cur_features.length === 0 && cur_bug.length === 0 ? 
                        <div className='mt-5 p-2 px-5 rounded text-light bg-info h5'>Release on 16th April 2022</div> : null
                }
            </div>
        )
    }

    return (
        <div className={"container new_features py-5"}>
            <div className={"new_features_row"}>
                <Header/>
                <Navbar/>
                <ListContainer/>
            </div>
        </div>)
}

export default Index;