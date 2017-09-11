import React, {findDOMNode, Component} from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HasNotLogin from './test/HasNotlogin';
import Model from './containers/Model'
class HasLogin extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.name
        }
    }
    render(){
        return(
            <p>welcome {this.state.name}</p>
        )
    }
}
class Li extends Component{
    constructor(props){
        super(props);
        this.num = props.num;
    }
    render(){
        return(
            <li>{this.num}</li>
        )
    }
}
class Ul extends Component{
    constructor(props){
        super(props);
        this.arr = props.arr
    }
    render(){
        let arr = this.arr;
        const listItem = arr.map((num)=> <Li key={num.toString()} num={num}/>);
        return(
            <ul>
                {listItem}
            </ul>
        )
    }
}
class NameForm extends Component{
    constructor(props){
        super(props);
        this.state={
            value : ''
        };
    }
    handleChange = (e)=> {
        this.setState({value:e.target.value.toUpperCase()})
    };
    handleSubmit = (e)=>{
        alert('御温泉 ' + this.state.value);
        e.preventDefault();
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
              <label>
                name:
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
              </label>
              <input type="submit" vlaue="Submit"/>
            </form>
        )
    }
}

class Boil extends Component{
    constructor(props){
        super(props);
    }
    temChange = (e)=>{
        this.props.temChange(e.target.value);
    };
    render(){
        return(
            <div><label>国际温度<input value={this.props.tem} onChange={this.temChange}/></label></div>
        );
    }
}
class ChinaTem extends Component{
    constructor(props){
        super(props);
    }
    temChange = (e)=>{
        this.props.temChange(e.target.value);
    };
    render(){
        return(
            <div><label>华氏温度<input value={this.props.tem} onChange={this.temChange}/></label></div>
        )
    }
}
//状态提升
class UpState extends Component {
    constructor(props){
        super(props);
        this.state = {
            tem:1,
            scale:'c'
        }
    }
    temcel = (tem)=>{
        this.setState({
            ten:tem,
            scale:'c'
        })
    };
    temFah = (tem)=>{
        this.setState({
            tem:tem,
            scale:'f'
        })
    };
    render(){
        let toCel = (tem)=> (tem - 32)*5/9;
        let toFah = (tem)=> (tem)*9/5 + 32;
        let check = (value)=>{
            if(Number.isNaN(value)){
                return 0
            }
            return value
        };
        const scale = this.state.scale;
        const tem = Number.parseInt(this.state.tem);
        const cel = scale ==='f' ? check(toCel(tem)) : check(tem);
        const fah = scale ==='c' ? check(toFah(tem)) : check(tem);
        return(
            <div>
              <Boil scale='f' tem={cel} temChange={this.temCel}/>
              <ChinaTem scale='c' tem={fah} temChange={this.temFah}/>
            </div>
        )
    }
}
//包含关系的组件
class FancyBorder extends Component{
    constructor(props){
        super(props);
        this.children = props.children;
    }
    render(){
        return(
            <div className={this.color}>
                {this.children}
            </div>
        )
    }
}
class WelcomeDialog extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <FancyBorder color="red">
              <div>welcome</div>
            </FancyBorder>
        )
    }
}
let JSONDATA = [
    {id:1, category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {id:2,category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {id:3,category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {id:4,category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {id:5,category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {id:6,category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
class ProductCategoryRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
              <th>{this.props.product.category}</th>
            </tr>
        )
    }
}
class ProductRow extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
              <th>{this.props.product.name}</th>
              <th>{this.props.product.price}</th>
            </tr>
        )
    }
}
class ProductTable extends Component{
    render(){
        let jsons = [];
        for(let i of this.props.product){
            if(i.name.includes(this.props.searchValue)){
                jsons.push(i);
            }
        }

        let rows = [];
        let lastCategory = undefined;
        for(let i of jsons){
            if(lastCategory!==i.category){
                // rows.push(<ProductCategoryRow  product={i}/>);
            }
            rows.push(<ProductRow key={i.id} product={i}/>);
            lastCategory = i.category;
        }
        return(
            <table>
              <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              {rows}
              </tbody>
            </table>
        )
    }
}
class SearchInput extends Component{
    constructor(props){
        super(props);
        this.textInput = null;
    }
    inputFn = (e)=>{
        this.props.searchVal(e.target.value);
    };
    componentDidMount(){
        this.textInput.focus();
    };
    render(){
        return(
            <input placeholder="输入点什么.." onChange={this.inputFn} ref={(input) =>{this.textInput = input}}/>
        )
    }
}
class SearchGroup extends Component{
    constructor(props){
        super(props);
    }
    searchVal = (val)=>{
        this.props.searchVal(val);
    };
    render(){
        return(
            <SearchInput searchVal={this.searchVal}/>
        )
    }
}
class SearchTheTable extends Component{
    constructor(){
        super();
        this.state = {
            searchValue : '',
        }
    }
    jsonComputed = (val)=>{
        let jsons = [];
        for(let i of this.props.json){
            if(i.name.includes(val)){
                jsons.push(i);
            }
        }
        return jsons;
    };
    searchVal = (val)=>{
        this.setState({
            searchValue: val,
        });
    };
    clickFn = ()=>{
        this.setState({
            searchValue: 1,
        });
    };
    render(){
        return(
            <div>
              <SearchGroup searchVal={this.searchVal}/>
              <ProductTable product={this.props.product} searchValue={this.state.searchValue}/>
            </div>
        )
    }
}

class TTT extends Component{
    render(){
        return(
            <p>{this.props.name}</p>
        )
    }
}
class Button extends Component{
    render(){
        return(
            <button style={{background: this.context.color}}>
                {this.props.children}
            </button>
        )
    }
}
// Button.contextTypes = {
//     color:PropTypes.string,
// };
class Message extends Component{
    render(){
        return(
            <div>
                {this.props.text}
              <Button color={this.props.color}>Delete</Button>
            </div>
        )
    }
}
class MessageList extends Component{
    getChildContext(){
        return {color:'red'}
    }
    render(){
        const color = 'red';
        const children = <Message color={color} text='asd'/>;
        return(
            <div>
                {children}
            </div>
        )
    }
}
// MessageList.childContextTypes = {
//     color:PropTypes.string
// };



class About extends Component{
    render(){
        return <h3>About</h3>
    }
}
class Inbox extends Component{
    render(){
        return(
            <div>
              <h2>Inbox</h2>
            </div>
        )
    }
}

function select(state) {
    return {
        userName: state.userName
    };
}
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            name : 'lucyz',
            islog: false,
            arr:[1,2,3,4,5,6,7],
            tem:1,
            scale:'c'
        };
    }
    componentDidMount(){

        this.tiemId  = setInterval(
            ()=>{this.tick()},
            1000
        )
    }
    componentWillMount(){
        clearInterval(this.tiemId);
    }
    tick(){
        this.setState({
            date : new Date(),
        })
    }
    clickFn = () =>{
        //在箭头函数里，this代表定义方法时的作用域，而不是调用的方法所在的作用域。此时是在App类内定义，因此this代指App的作用域。
        //这里如果不使用箭头函数，this代指的不是App，则会报错。
        this.props.dispatch({type:'A',filter:'kpii'});
    };
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="App-intro">
                    <span>now is {this.state.date.toLocaleTimeString()}</span>
                    <p onClick={this.clickFn}>my name is {this.props.userName}</p>
                    {/*{this.state.islog ? <HasLogin name = {this.state.name}/> : <HasNotLogin />}*/}
                    {/*<Ul arr={this.state.arr}/>*/}
                    {/*<NameForm/>*/}
                    {/*<UpState/>*/}
                    {/*<WelcomeDialog/>*/}
                </div>
                <Model/>
                {/*<SearchTheTable product={JSONDATA}/>*/}
                {/*<HasNotLogin>this is {this.props.userName}</HasNotLogin>*/}
                {/*<FilterableProductTable products={JSONDATA}/>*/}
                {/*<MessageList/>*/}
                <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {/*{this.props.children}*/}

            </div>
        )
    }
}
export default connect(select)(App);