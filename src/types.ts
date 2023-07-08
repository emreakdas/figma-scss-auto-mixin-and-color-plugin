const FontWeightTypes: { [key: string]: number } = {
    "Thin":100,
    "ExtraLight": 200,
    "Light": 300,
    "Regular": 400,
    "Medium": 500,
    "SemiBold": 600,
    "Bold": 700,
    "ExtraBold": 800,
    "Black": 900
}  

const TextTypes: { [key: string]: string } = {
    "Body Text/Text 1": "text-type-1",
    "Body Text/Text 2": "text-type-2",
    "Body Text/Text 3": "text-type-3",
    "Body Text/Text 4": "text-type-4",
    "Body Text/Text 5": "text-type-5",
    "Body Text/Text 6": "text-type-6",
}

const HeadingTypes: { [key: string]: string } = {
    "Heading Text/Headign 1": "heading-type-1",
    "Heading Text/Headign 2": "heading-type-2",
    "Heading Text/Headign 3": "heading-type-3",
    "Heading Text/Headign 4": "heading-type-4",
    "Heading Text/Headign 5": "heading-type-5",
    "Heading Text/Heading 6": "heading-type-6"
}

const ColorTemplateTypes: { [key: string]: string } = {
    "Theme Color/Primary Color": "color-primary",
    "Theme Color/Secondary Color": "color-secondary",
    "Theme Color/Third Color": "color-third",
    "Theme Color/Fourth Color": "color-fourth",
    "Theme Color/Fifth Color": "color-fifth"
}

const ColorTextTypes: { [key: string]: string } = {
    "Text Color/Text": "color-text",
    "Text Color/Subtext": "color-sub-text"
}

const ColorBaseTypes: { [key: string]: string } = {
    "Base Color/Color Border": "color-border",
    "Base Color/Color Background": "color-background"
}

export { FontWeightTypes, TextTypes, HeadingTypes, ColorTemplateTypes, ColorTextTypes, ColorBaseTypes }