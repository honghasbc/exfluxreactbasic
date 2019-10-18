
import AppDispatcher from './AppDispatcher';
import { EventEmitter } from 'events';

let _articles = [];
let _articlesApproved = [];
let _items = [];
let _item = [];

class AppStore extends EventEmitter {

    constructor() {
        super();
        this.dispatchToken = AppDispatcher.register(this.dispatcherCallback.bind(this))
    }

    emitChange(eventName) {
        this.emit(eventName);
    }

    getAll() {
        return _articles;
    }

    getApproved() {
         return _articlesApproved;
    }

    submitArticle(article) {
        _articles.push(article);
    }
    
    addItem(article) {
    	_item = article;
    	_item.name = _item.name +' App Store';
    	_item.age = _item.age +' App Store';
    	_item.sex = _item.sex +' App Store';
    	_item.job = _item.job +' App Store';
    	_items.push(article);
    }
    
    getItem() {
        return _item;
    }


    removeArticle(key)
    {
        _articles.splice(key,1);
        _articlesApproved.splice(key,1)
    }

    approveArticle(article) {
        if (article.length <= 10) {
            _articlesApproved.push('[Approved]:' + article);
        }
        else {
            _articlesApproved.push('[Rejected]:' + article);
        }
    }



    addChangeListener(eventName, callback) {
        this.on(eventName, callback);
    }
    
    addNewItemListener(eventName, callback) {
        this.on(eventName, callback);
    }

    removeChangeListener(eventName, callback) {
        this.removeListener(eventName, callback);
    }

    dispatcherCallback(action) {
        switch (action.actionType) {
            case 'SUBMIT_ARTICLE':
                this.submitArticle(action.value);
                break;
            case 'APPROVE_ARTICLE':
                this.approveArticle(action.value);
                break;
            case 'REMOVE_ARTICLE':
                this.removeArticle(action.value);
                break;
            case 'ADD_ITEM':
                this.addItem(action.value);
                
        }

        this.emitChange('STORE_' + action.actionType);

        return true;
    }
}

export default new AppStore();

