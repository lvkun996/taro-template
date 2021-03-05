

/**
 * 获取变量类型
 * @param {*} v
 */
export function getType(v) {
    const string = Object.prototype.toString.call(v);
    const regexp = /(?= ).*(?=\]$)/; // 后行断言有的浏览器不支持
    return string.match(regexp)[0].slice(1);
}

/**
 * 类似classnames库的功能
 * @param  {...any} arg
 */
export function classnames(...arg) {
    const classes: string[] = [];
    for (const item of arg) {
      const itemType = getType(item);
      switch (itemType) {
        case 'Object': {
          for (const [key, value] of Object.entries(item)) {
            if (value) {
              classes.push(key);
            }
          }
          break;
        }
        case 'Array': {
          const str = classnames(...item);
          classes.push(str);
          break;
        }
        default: {
          if (item) {
            classes.push(item);
          }
        }
      }
    }
    return classes.join(' ');
  }


 