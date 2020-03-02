export interface SlugConfig {
    keepCapitalization: boolean,
    capitalizeEveryFirst: boolean,
    useUnderscores: boolean
}

export const getSluggedText = (text: string, options: SlugConfig): string => {

    let sluggedText = sanitizeText(text);

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

            return `${firstChar}${pieces.slice(1, pieces.length)}`;
        });


        sluggedText = slugPieces.join('-');
    }

    // Make copy of the text with non-alphanumerics removed
    return sluggedText;
}

const sanitizeText = (text: string) => {
    // The string where permitted characters (spaces or alphanumeric) from the original text will be stored 
    let sanitizedString = ''

    // Check each character in the text
    for (let i = 0; i < text.length; i++) {

        const char = text[i];

        // Sanitize to only alpha numerics and spaces
        if ((char.match(/^[a-z0-9]+$/i) || char === ' ')) {
            const last = sanitizedString[sanitizedString.length - 1];

            // If the current character is a space, and the last character in the sanitized string is too
            // then skip this one
            if (char === ' ') {
                if (last === ' ')
                    continue;
            }
            sanitizedString += char;
        }
    }

    return sanitizedString;
}