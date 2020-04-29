export const solo: ({
    utf8: {
        char: string;
        regex: RegExp;
        hex: string;
    };
    alt: {
        char: string;
        regex: RegExp;
        hex: string;
    }[];
    misrender: {
        chars: string;
        regex: RegExp;
        hex: string;
    };
} | {
    utf8: {
        char: string;
        regex: RegExp;
        hex: string;
    };
    misrender: {
        chars: string;
        regex: RegExp;
        hex: string;
    };
    alt?: undefined;
})[];
export const duo: {
    utf8: {
        char: string;
        regex: RegExp;
        hex: string;
    };
    misrender: {
        chars: string;
        regex: RegExp;
        hex: string;
    };
}[];
export const trio: {
    utf8: {
        char: string;
        regex: RegExp;
        hex: string;
    };
    misrender: {
        chars: string;
        regex: RegExp;
        hex: string;
    };
}[];
