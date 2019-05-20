// Edit from prism-coffeescript.js
/* global Prism */
(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  const comment = /#(?!\{).+/
  const interpolation = {
    pattern: /#\\:{[^}]+\}/,
    alias: 'variable'
  }

  Prism.languages.storyscript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [

      // Strings are multiline
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        greedy: true
      },

      {
        // Strings are multiline
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: true,
        inside: {
          'interpolation': interpolation
        }
      }
    ],
    'keyword': /\b(?:break|as|catch|returns?|continue|is|not|else|finally|if|then|try|when|while|foreach|and|or)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  })

  Prism.languages.insertBefore('storyscript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },

    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  })

  Prism.languages.insertBefore('storyscript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.javascript
      }
    },

    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  })

  Prism.languages.insertBefore('storyscript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  })

  delete Prism.languages.storyscript['template-string']

  Prism.languages.story = Prism.languages.storyscript
}(Prism))
