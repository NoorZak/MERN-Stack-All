import react, { useState } from 'react';

const Tab = (props) => {
    
   // const [msg, setMsg] = useState("");
   
    const tabList = [
        {label: "Tab1", content: "Tab1 Content is showing here"},
        {label: "Tab2", content: "Tab2 Content is showing here"},
        {label: "Tab3", content: "Tab3 Content is showing here"},
        {label: "Tab4", content: "Tab4 Content is showing here"}
    ];

    const onClickHandler = (e, value) => {
        //setMsg(value);
        props.onNewMessage( value );

    }

    
    

    return (
        <div>
            {
                tabList.map( (item, i) =>
                   <button key={i} onClick={ (e) => onClickHandler(e, item.content) }>{ item.label }
                   
                   </button>
                )
            }
        </div>
    )
}

export default Tab;
