import FetchRecipesByType from './FetchRecipesByType';
import * as Constants from '../constants';

export default () => {
    Constants.TYPES.map((type) => {
        FetchRecipesByType(type);
    });
}
