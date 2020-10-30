module.exports = {
    "extends": "stylelint-config-standard",
    "plugins": [
      "stylelint-scss",
      "stylelint-selector-bem-pattern"
    ],
    "rules": {
      "plugin/selector-bem-pattern": {
        "componentName": "[A-Z]+",
        "componentSelectors": {
          "initial": "^\\.{componentName}(?:-[a-z]+)?$",
          "combined": "^\\.combined-{componentName}-[a-z]+$"
        },
        "utilitySelectors": "^\\.util-[a-z]+$"
      },
      "selector-nested-pattern": "^&",
      "indentation": 2,
      "no-descending-specificity": null,
      "no-eol-whitespace": null,
      "declaration-empty-line-before": null,
      "value-keyword-case": null,
      "at-rule-no-unknown": [
        true,
        {
          "ignoreAtRules": [
            "tailwind",
            "apply",
            "responsive",
            "variants",
            "screen",
            "use",
            "include",
            "mixin"
          ]
        }
      ]
    }
  }