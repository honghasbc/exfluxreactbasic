import AppDispatcher from './AppDispatcher';

class AppActions {

    submitArticle(data) {
        AppDispatcher.dispatch({
            actionType: 'SUBMIT_ARTICLE',
            value: data
        });

        AppDispatcher.dispatch({
            actionType: 'APPROVE_ARTICLE',
            value: data
        });
    }

    removeArticle(key)
    {
         AppDispatcher.dispatch({
            actionType: 'REMOVE_ARTICLE',
            value: key
        });
    }
    
    addNewItem(data) {
        AppDispatcher.dispatch({
            actionType: 'ADD_ITEM',
            value: data
        });
    }
}



export default new AppActions()