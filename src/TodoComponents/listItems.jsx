import React, {Component} from 'react';
import "./view.css"

class ListItems extends Component {



    render() {
        const items=this.props.listItems;
        const loopedItems=items.map(a=>{
            return <div className="list" key={a.key} >
                <p><input type="text" id={a.key} value={a.text} onChange={(e)=>{
                    this.props.editItem(e.target.value, a.key);
                }}/>
                    {/*for edit i have put key and text in input type rather than doing below*/}
                    {/*{a.text}*/}
                    {/*<input className="radio" type="radio" onClick={()=>this.props.isChecked}/>*/}
                </p>
                <button id="btnEdit" onClick={()=>this.props.editItem(a.key)}>Edit</button>
                <button id="btnDelete" onClick={()=>this.props.deleteItem(a.key)}>Delete</button>
            </div>
        });

        return (
            <div style={{color:"#888DAD"}}>
                {loopedItems}

            </div>
        );
    }

}

export default ListItems;