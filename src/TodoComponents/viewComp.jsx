import React, {Component} from 'react';
import ListItems from "./listItems";
import "./view.css";

// import image from './add.png';


class ViewComp extends Component {

    constructor(props) {

        super(props);

        this.state = {

            todoItems: [],
            currentItems: {text: '', key: ''}
        }
    }

    handleChange = (event) => {
        this.setState({currentItems: {text: event.target.value, key: Date.now()}})
    };

    onAddTodo = (event) => {
        // event.preventDefault(); //prevent reloading browser
        const newItem = this.state.currentItems; //taking and storing input value
        if (newItem.text !== "") {
            const newItems = [...this.state.todoItems, newItem]; //using destructuring
            this.setState({todoItems: newItems, currentItems: {text: '', key: ''}})
            document.getElementById("inputTodo").value = "";

        }
    }

    //1st
    componentWillMount(nextState) {
        localStorage.getItem('MY_KEY') && this.setState({
            todoItems: JSON.parse(localStorage.getItem('MY_KEY'))
        });
    }

    deleteItem = (key) => {
        console.log(key);
        alert("about del");
        const filterItems = this.state.todoItems.filter(a =>
            a.key !== key);
        this.setState({todoItems: filterItems});
    }

    //2nd  no need for now
    componentDidMount() {
        if (localStorage.getItem('MY_KEY')) {
            this.onAddTodo();
        } else {
        }
    }

    //3rd
    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.setItem('MY_KEY', JSON.stringify(nextState.todoItems)); //storing newItems in local storage
    }


    isChecked=(id)=>{
       console.log(id);
            //
            // this.setState(oldState => {
            //     const newTodo = oldState.todoItems.map(x => {
            //         if (x.id === id) {
            //             x.completed = !x.completed
            //             return x
            //         }
            //         return x
            //     })
            //     return {
            //         todoItems: newTodo
            //     }
            // })
        }

        //edit task
    onEditTask=(text, key)=>{
        const editedItems=this.state.todoItems;
        editedItems.map(a=>{
            if (a.key===key){
                a.text=text;
            }
            this.setState({todoItems:editedItems});
        })

    }


    render() {
        return (
            <div>
                <div className="root" >
                    <input type="text" id="inputTodo" placeholder="Enter task" onChange={this.handleChange}/><br/><br/>
                    <button id="btnAddTask" onClick={this.onAddTodo} >Add Task
                    </button>
                    <br/><br/>
                    {/*<button>{require(image)}</button>*/}
                    <ListItems listItems={this.state.todoItems} //sending todoItems array as a prop
                               deleteItem={this.deleteItem} //sending delete function as a prop
                               editItem={this.onEditTask} //sending edit function as a prop
                                // isChecked={this.isChecked}
                    />

                </div>
            </div>

        );
    }
}

export default ViewComp;