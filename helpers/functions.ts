export const makeIconContents = (source: string = ''): string => {
    if (!source) return "";
    return source
      .split(/[\s,]+/)
      .filter((char) => char.trim().length > 0)
      .slice(0, 2)
      .map((char) => {
        return char.charAt(0)
      })
      .join('')
  }
  
/**
* Generate a color for specific string
* @param {String} value
*/
export const getColor = (value: string): string => {
    let hash = 0
    let color = '#'
  
    for (let i = 0; i < value.length; i++) {
      hash = value.charCodeAt(i) + ((hash << 5) - hash)
    }
  
    for (let i = 0; i < 3; i++) {
      const valuePart: number = (hash >> (i * 8)) & 0xff
      color += ('00' + valuePart.toString(16)).substr(-2)
    }
  
    return color
}

export const makeid = (length: number = 6) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}