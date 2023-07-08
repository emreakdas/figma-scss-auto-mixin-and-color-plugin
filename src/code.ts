import  { FontWeightTypes, TextTypes, HeadingTypes, ColorTemplateTypes, ColorTextTypes, ColorBaseTypes } from './types'
import  { figmaRGBToHex } from './utility'

/* Figma UI */
figma.showUI(__html__);
figma.ui.resize(700, 500);

figma.ui.onmessage = (message) => {
  const mixinSources: {[key: string]: string[]} = {
    textTypes: [],
    headingTypes: [],
    colorTemplate: [],
    colorTextTypes: [],
    colorBase: []
  }

  function createTemplate(array: any, comment: string, newLine: boolean = false){
    if(array.length == 0){
      return "";
    }
    
    let str = "";
    str += `/* ${comment} */\n`;
    array.forEach((item: string) => str += item);

    if(newLine){
      str += "\n";
    }

    return str;
  }

  let templateMixin = '';

  if(message === "create-text-type"){
    const figmaTexts = figma.getLocalTextStyles();
    figmaTexts.forEach((item) => {    
      if(TextTypes.hasOwnProperty(item.name)){      
        const mixinStr = `@mixin ${TextTypes[item.name]} {\n @include line-rule(${item.fontSize});\n font-weight: ${FontWeightTypes[item.fontName.style] ?? 'Undefined weight!'};\n}\n\n`;
        mixinSources.textTypes.push(mixinStr);
      }

      if(HeadingTypes.hasOwnProperty(item.name)){      
        const mixinStr = `@mixin ${HeadingTypes[item.name]} {\n @include line-rule(${item.fontSize});\n font-weight: ${FontWeightTypes[item.fontName.style] ?? 'Undefined weight!'};\n}\n\n`;
        mixinSources.headingTypes.push(mixinStr);
      }
    });

    templateMixin += createTemplate(mixinSources.textTypes, "Text Type");
    templateMixin += createTemplate(mixinSources.headingTypes, "Heading Type");
  }

  if(message === "create-color"){
    const figmaColors = figma.getLocalPaintStyles();
    figmaColors.forEach(item => {  
      if(item.paints[0].type !== "SOLID"){
        return;
      }

      if(ColorTemplateTypes.hasOwnProperty(item.name)){      
        const mixinStr = `$${ColorTemplateTypes[item.name]}: ${figmaRGBToHex(item.paints[0])};\n`;
        mixinSources.colorTemplate.push(mixinStr);
      }

      if(ColorTextTypes.hasOwnProperty(item.name)){      
        const mixinStr = `$${ColorTextTypes[item.name]}: ${figmaRGBToHex(item.paints[0])};\n`;
        mixinSources.colorTextTypes.push(mixinStr);
      }

      if(ColorBaseTypes.hasOwnProperty(item.name)){      
        const mixinStr = `$${ColorBaseTypes[item.name]}: ${figmaRGBToHex(item.paints[0])};\n`;
        mixinSources.colorBase.push(mixinStr);
      }
    });

    templateMixin += createTemplate(mixinSources.colorTemplate, "Color Template", true);
    templateMixin += createTemplate(mixinSources.colorTextTypes, "Color Text", true);
    templateMixin += createTemplate(mixinSources.colorBase, "Color Base");
  }

  figma.ui.postMessage(templateMixin);
}