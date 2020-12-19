import '../src/style.css';
import '../src/levelzone.js';
import '../src/csseditor.js';
import {highlighting} from '../src/highlightingcode.js';
import {Table} from '../src/table.js';
import {HTMLEditor} from '../src/createhtmleditor.js';
import {determinationLevel} from './determinationlevel.js'
import {levels} from './levels.js';
import {highlightsCurrentDish} from '../src/createhtmleditor.js';
import {highlightsCurrentHtmlCode} from '../src/createhtmleditor.js';

export const createGame = () => {
  const level = determinationLevel();
  const table = new Table();
  if(table.table.childElementCount !== 0){
    while(table.table.firstChild){
      table.table.removeChild(table.table.firstChild);
    }
  }
  table.createDish(levels[`level${level}`].amountItems);
  const dishNumberWithItem = levels[`level${level}`].dishNumberWithItem;
  const typeItem = levels[`level${level}`].typeItem;
  table.createItemInDish(dishNumberWithItem, typeItem);
  const dishNumberAnimated = levels[`level${level}`].dishNumberAnimated;
  const typeItemAnimated = levels[`level${level}`].typeItemAnimated;
  setTimeout(() => {
    table.animating(dishNumberAnimated, typeItemAnimated);
  }, 1000);
  const htmlEditor = new HTMLEditor();
  htmlEditor.createHTMLEditor(level);
  highlighting();
  highlightsCurrentDish();
  highlightsCurrentHtmlCode();
}

createGame();


