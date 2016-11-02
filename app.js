'use strict';

const Editor = require('../index');

Editor.App.extend({
  init ( opts, cb ) {
    Editor.init({
      'package-search-path': [
        'app://packages/',
      ],
      'layout': 'app://layout.json',
    });

    if ( cb ) {
      cb ();
    }
  },

  run () {
    Editor.run('app://index.html', {
      title: 'UI-Kit PlayGround',
      width: 400,
      height: 600,
      show: false,
      resizable: true,
    });
  },
});
