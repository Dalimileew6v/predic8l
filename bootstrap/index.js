import "./boots/index";

import $ from "./$";
import Validate from './validate.js';
import htmlParser from './html-parser.js';
import BigNumber from "./bignumber";
import cache from "./cache";

// 其他
$.$define('Validate', Validate);
$.$define('htmlParser', htmlParser);
$.$define('BigNumber', BigNumber);
$.$define('cache', cache);
