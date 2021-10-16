import { color } from './colors';
import { Options } from './model';

export function markdown(text: string, options: Options) {
    let result : string = text;
    if (options) {
        if (options.bold) {
            result = color(`**${result}**`, { font: 'yellow', effects: ['bright'] });
        }
        if (options.italic) {
            result = color(`_${result}_`, { font: 'magenta', effects: ['italic'] });
        }
        if (options.mono) {
            result = color(`\`${result}\``, { font: 'green' });
        }
        if (options.link) {
            result = `[${result}](${color(options.link, { font: 'blue', effects: ['underscore'] })})`;
        }
    }
    return result;
}
