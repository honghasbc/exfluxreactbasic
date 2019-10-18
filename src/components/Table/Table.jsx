import React from 'react';
import './Table.css';
import AppActions from '../../lib/AppActions';
import AppStore from '../../lib/AppStore';
import Button from '../Button/Button.jsx';

class Table extends React.Component {
    constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Dr. Foo",
               "age":"20",
               "sex":"Male",
               "job":"Student"
            },
            {
               "id":2,
               "name":"Ms. Bar",
               "age":"30",
               "sex":"Male",
               "job":"Student"
            },
            {
               "id":3,
               "name":"Mrs. Baz",
               "age":"40",
               "sex":"Male",
               "job":"Student"
            },
            {
                "id":4,
                "name":"Alaza Baz",
                "age":"40",
                "sex":"Male",
                "job":"Student"
            },
            {
                "id":5,
                "name":"Luxa papa Baz",
                "age":"40",
                "sex":"Male",
                "job":"Student"
            }
         ],
         headerData:"Content Header"
      }
      this.setStateHandler = this.setStateHandler.bind(this);
      this.addNew = this.addNew.bind(this);
      this.addNewItem = this.addNewItem.bind(this);
   }
    
   addNew(){
       const items = [...this.state.data];
       let item = Object.create(items[items.length -1]);
       console.log(item);
       item.id = item.id + 1;
       AppActions.addNewItem(item)
   }
   setStateHandler(){
      var item = {
                   "id":7,
                   "name":"Foox",
                   "age":"20",
                   "sex":"Male",
                   "job":"Student"
                  }
      var myArray = this.state.data.slice();
      myArray.push(item);
      this.setState({data: myArray}) 
   }
   
   componentDidMount() {
       console.log('Component DID MOUNT!')
       console.log('Component DID MOUNT! addNewItemListener STORE_ADD_ITEM')
       AppStore.addNewItemListener('STORE_ADD_ITEM', this.addNewItem);
   }

   componentWillUnmount() {
       console.log('componentWillUnmount! removeChangeListener STORE_ADD_ITEM')
       AppStore.removeChangeListener('STORE_ADD_ITEM', this.onChange);
   }
   
   addNewItem() {
        this.handleResultAddNewItem()
   }
   
   handleResultAddNewItem()
   {
       if (this.state.data.length > 9) {
           alert("You have exceeded the number of articles you can submit,You cannot add more articles");
       }
       var myArray = this.state.data.slice();
       myArray.push(AppStore.getItem())
       this.setState({data: myArray}) 
   }
   
   
   render() {
    var i = 1;
      return (      
         <div>          
            <Header headerData = {this.props.headerTableText}/>            
            <TableContent datatable = {this.state.data} handleAddNew ={this.addNew}/>         
            <div>
                <button onClick = {this.setStateHandler}>SET STATE</button>
                <h4>State Array: {this.state.data[0].id}</h4>
            </div>
         </div>
      );
   }
}

class Header extends React.Component {   
  render(){   
    return(
      <div className = "Description-table">
        <h1> Example Table {this.props.headerData}</h1>
      </div>
    );
  }
}

class TableContent extends React.Component {  
  render(){
    const styleButton = {
        fontSize: '18px',
        color: '#fff'
    };
    return(
            <div className="container-table100">
                <div className="wrap-table100">
                    <div className="table100 ver1 m-b-110">
                        <div className="table100-head">
                            <table>
                                <thead>
                                    <tr className="row100 head">
                                        <th className="cell100 column1">#</th>
                                        <th className="cell100 column2">Name</th>
                                        <th className="cell100 column3">Age</th>
                                        <th className="cell100 column4">Sex</th>
                                        <th className="cell100 column5">Job</th>
                                        <th className="cell100 column6"><Button handleClick={this.props.handleAddNew} styleButton = {styleButton} text="Add Item" /></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table100-body js-pscroll">
                            <table>
                                <tbody>
                                    {this.props.datatable.map((person, i) => <TableRow key = {i} 
                                       datarow = {person} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}
class TableRow extends React.Component {
  render(){
    return(
      <tr className="row100 body">
        <td className="cell100 column1">{this.props.datarow.id}</td>
        <td className="cell100 column2">{this.props.datarow.name}</td>
        <td className="cell100 column3">{this.props.datarow.age}</td>
        <td className="cell100 column4">{this.props.datarow.sex}</td>
        <td className="cell100 column5">{this.props.datarow.job}</td>
        <td className="cell100 column6"><input type="button" value="Click Me"/></td>
      </tr>
    );
  }
}

export default Table;
