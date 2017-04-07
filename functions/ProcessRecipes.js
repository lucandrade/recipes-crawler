import Cheerio from 'cheerio';

import * as Constants from '../constants';
import ProcessRecipes from './ProcessRecipes';

export default (html) => {
    try {
        const dom = Cheerio.load(html);
        const recipes = dom(Constants.EL_LIST);
        console.log('encontrou', recipes.length, 'itens');
    } catch (e) {
        console.log('erro ao carregar html de receitas');
        console.log(e);
    }
}
