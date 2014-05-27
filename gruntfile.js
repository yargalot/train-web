module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    // Clean the dist
    clean: ['dist'],

    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {
            expand: true,
            cwd: 'src',
            src: ['images/**'],
            dest: 'dist/'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'bower_components',
            src: [
              '/html5shiv/dist/html5shiv.min.js',
              '/respond/dest/respond.min.js',
              'angular/angular.js',
              'angular-route/angular-route.js',
              'angular-resource/angular-resource.js',
              'angular-animate/angular-animate.js'
            ],
            dest: 'public/javascripts/'
          }
        ]
      }
    },

    // Jade Compliation
    jade: {
      development: {
        options: {
          data: {
            debug: true
          },
          pretty: true
        },
        files: [{
          expand: true,
          cwd: 'src/jade',
          src: ['**/*.jade', '!includes/**/*.jade'],
          dest: 'dist/',
          ext: '.html'
        }]
      }
    },

    less: {
      development: {
        files: {
          "public/stylesheets/style.css": "src/less/style.less"
        }
      },
      production: {
        options: {
          paths: ["assets/css"],
          cleancss: true,
          modifyVars: {
            imgPath: '"http://mycdn.com/path/to/images"',
            bgColor: 'red'
          }
        },
        files: {
          "path/to/result.css": "path/to/source.less"
        }
      }
    },

    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'src/images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/images/'                  // Destination path prefix
        }]
      }
    },

    uglify: {
      jsMin: {
        files: {
          'dist/js/script.min.js': ['src/js/**/*.js']
        }
      }
    },

    // Minify CSS
    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['*.css', '!*.min.css'],
        dest: 'dist/css/',
        ext: '.min.css'
      }
    },

    // Watch Task
    watch: {
      options : {
        livereload: 35900,
        interrupt: true
      },
      jade: {
        files: 'src/jade/**/*.jade',
        tasks: ['jade:development']
      },
      less: {
        files: ['src/less/**/*.less'],
        tasks: ['less:development']
      },
      js : {
        files: ['src/js/**/*.js']
      },
      images: {
        files: ['src/images/**/*'],
        tasks: ['copy:main']
      }
    },

    // Make a server

    connect: {
      options: {
        port: 9000,
        logger: 'dev',
        debug: true,
        hostname: 'localhost',
        livereload: 35900
      },
      proxies: [{
        context: '/api', // the context of the data service
        host: 'mysterious-mountain-3628.herokuapp.com', // wherever the data service is running
        https: false,
        changeOrigin: true,
        xforward: false,
        rewrite: {
          '^/api': ''
        }
      }],
      livereload: {
        options: {
          open: true,
          livereload: 35900,
          base: [
            'dist'
          ],
          middleware: function (connect, options) {
            var middlewares = [];

            if (!Array.isArray(options.base)) {
              options.base = [options.base];
            }

            // Setup the proxy
            middlewares.push(require('grunt-connect-proxy/lib/utils').proxyRequest);

            // Serve static files
            options.base.forEach(function(base) {
              middlewares.push(connect.static(base));
            });

            return middlewares;
          }
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  require('load-grunt-tasks')(grunt);

  // Default task(s).
  grunt.registerTask('default', ['clean', 'jade', 'copy', 'uglify', 'cssmin', 'imagemin', 'connect', 'watch']);
  grunt.registerTask('server',  ['clean', 'jade', 'less:development', 'copy', 'uglify', 'cssmin', 'imagemin', 'watch']);
  grunt.registerTask('build',   ['clean', 'jade', 'copy', 'uglify', 'cssmin', 'imagemin']);

};