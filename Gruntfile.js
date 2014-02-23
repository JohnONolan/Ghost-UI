/*!
 * Ghost-UI Gruntfile
 * http://ui.ghost.org
 * Copyright 2014 Ghost Foundation.
 * Licensed under MIT (https://github.com/TryGhost/Ghost-UI/blob/master/LICENSE)
 */

module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

};