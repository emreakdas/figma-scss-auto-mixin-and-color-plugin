function figmaRGBToWebRGB(color: { [key: string]: number }) : number[] {
    const rgb: number[] = [];
    ['r', 'g', 'b'].forEach((e, i) => {
        rgb[i] = Math.round(color[e] * 255);
    });
    return rgb;
}

function figmaRGBToHex(paints: any) {
    const { r, g, b } = paints.color;
    let hex = '#';
    const rgb = figmaRGBToWebRGB({ r, g, b });
    hex += ((1 << 24) + (rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16).slice(1);
    if (rgb[3] !== undefined) {
        const a = Math.round(rgb[3] * 255).toString(16);
        if (a.length == 1) {
            hex += '0' + a;
        }
        else {
            if (a !== 'ff')
                hex += a;
        }
    }
    return hex;
}

export { figmaRGBToHex };