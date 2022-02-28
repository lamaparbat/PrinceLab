import React, {useState} from 'react';
import '../NewFeatures/Index.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

//main function
const Index = () => {
    //list of features
    const [version_list, setVersionList] = useState([
        "Beta version 1",
        "Beta version 2.0",
        "Beta version 3.0",
        "Beta version 4.0"
    ]);
    const [platform_list, setPlatformList] = useState([
        "MacOS & Windows",
        "Android & IOS"
    ]);

    const latestPcFeatures = useState([
        "Custom code block",
        "Python 3 terminal",
        "Execution mode",
        "Parallel computing",
        "Multiple themes",
        "Source code access",
        "Source code access"
    ])

    const latestBugFixes = useState([
        "Performance boost",
        "Font style",
        "Window responsiveness",
        "Custom themes"
    ])

    //current platform and version
    const [cur_platform, setCurPlatform] = useState(platform_list[0]);
    const [cur_version, setCurVersion] = useState(version_list[0]);

    //custom dropdown button
    const DropdownBtn = ({id, data}) => {
        // update the current item selection
        const setCurrentItem = (id, item) => {
            id === "platform" ? setCurPlatform(item) : setCurVersion(item);
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
                                    href="#"
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
    const List = ({id,lists}) => {
        //custom item
        const Item = ({data}) => {
            return(
                <div className={"content_list_item my-3"}>
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
                    lists[0].map((item ,index) => {
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
                <p className={"h4 mb-3"}>All new features & bug fixes</p>
            </div>)
    }

    //custom navbar
    const Navbar = () => {
        return (
            <div className={"sub_nav d-flex w-75 py-3"}>
                <DropdownBtn
                    id="platform"
                    data={platform_list}
                />
                <DropdownBtn
                    id="version"
                    data={version_list}
                />
            </div>)
    }

    //custom feature container
    const ListContainer = () => {
        return (
            <div className={"my-5 w-75 d-flex justify-content-center"}>
                <div className={"features_content d-flex flex-column align-center w-50"}>
                    <h2 className={"fw-bold my-4"}>Features</h2>
                    <List id={"feature"} lists={latestPcFeatures} />
                </div>
                <div className={"bug_content d-flex flex-column align-center w-50"}>
                    <h2 className={"fw-bold my-4"}>Bug fixes</h2>
                    <List id={"bug"} lists={latestBugFixes} />
                </div>
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