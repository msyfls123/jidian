﻿$axure.loadCurrentPage({
  "url":"页面_9.html",
  "generationDate":new Date(1389334355487.68),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable",
"kong",
"denglu1",
"denglu2",
"kong2",
"zc1",
"zc2",
"zc3",
"kong3",
"yi",
"jiache"],
  "page":{
    "packageId":"09380e997e3642488d6191ea46709237",
    "type":"Axure:Page",
    "name":"页面 9",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"e9e5012786224d8fa4b3fa5752015c12",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":640,
              "height":1136}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d0dbe0f0360643e5b8ac773938c94ab8",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":640,
                  "height":1136}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/页面_9/u0.png"}},
{
          "id":"5ee82e0ddddd4222a81d07751bfb6a8e",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":530,
              "y":80},
            "size":{
              "width":50,
              "height":50}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setFunction",
                      "description":"设置 值于 jiache = &quot;1&quot;",
                      "expr":{
                        "exprType":"block",
                        "subExprs":[{
                            "exprType":"fcall",
                            "functionName":"SetGlobalVariableValue",
                            "arguments":[{
                                "exprType":"globalVariableLiteral",
                                "variableName":"jiache"},
{
                                "exprType":"stringLiteral",
                                "value":"1",
                                "stos":[]}]}]}},
{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 页面 3",
                      "target":{
                        "targetType":"page",
                        "url":"页面_3.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"d00c4b653acb41c0b8ec510182b871c8",
          "label":"",
          "type":"imageMapRegion",
          "styleType":"imageMapRegion",
          "visible":true,
          "style":{
            "location":{
              "x":180,
              "y":960},
            "size":{
              "width":280,
              "height":100}},
          "adaptiveStyles":{
},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 返回",
                      "target":{
                        "targetType":"backUrl",
                        "includeVariables":false},
                      "linkType":"current"}]}]}},
          "tabbable":true}]}},
  "masters":{
},
  "objectPaths":{
    "e9e5012786224d8fa4b3fa5752015c12":{
      "scriptId":"u0"},
    "d0dbe0f0360643e5b8ac773938c94ab8":{
      "scriptId":"u1"},
    "5ee82e0ddddd4222a81d07751bfb6a8e":{
      "scriptId":"u2"},
    "d00c4b653acb41c0b8ec510182b871c8":{
      "scriptId":"u3"}}});