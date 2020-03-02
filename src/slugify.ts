export interface SlugConfig {
    keepCapitalization: boolean,
    capitalizeEveryFirst: boolean,
    useUnderscores: boolean
}

export const getSluggedText = (text: string, options: SlugConfig): string => {

    // Make copy of the text with non-alphanumerics removed
    let sluggedText = text.replace(/\W/g, '');

    // Use underscores if desired, otherwise, uses dashes by default
    if (options.useUnderscores) sluggedText = sluggedText.replace(/ /g, '_');
    else sluggedText = sluggedText.replace(/ /g, '-');

    // By default, keeping the current capitalization is false, so all text gets lowercased
    // Otherwise, do nothing, to preserve the capitalization state
    if (options.keepCapitalization == false) sluggedText = sluggedText.toLowerCase();

    // Capitalize the first letter of each slug piece
    if (options.capitalizeEveryFirst) {
        const slugPieces = sluggedText.split('-').map((pieces) => {

            // Get the first character
            let firstChar = pieces[0];

            // Uppercase it if it's a string
            if (typeof firstChar === 'string')
                firstChar = firstChar.toUpperCase();

            console.log(`${firstChar} ${pieces.slice(1, pieces.length)}`);
            return `${firstChar}${pieces.slice(1, pieces.length)}`;
        });


        sluggedText = slugPieces.join('-');
    }

    return sluggedText;
}
