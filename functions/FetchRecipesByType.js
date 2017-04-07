import LoadUrl from './LoadUrl';
import ProcessRecipes from './ProcessRecipes';
import * as Constants from '../constants';

export default (type) => {
    const url = `${Constants.URL}${Constants.URL_TYPES}${type.url}/`;
    LoadUrl(url)
        .then(response => ProcessRecipes(response))
        .catch(err => {
            console.log(err);
        });
}
