/*
 * This is an example build file that demonstrates how to use the build system for
 * require.js.
 *
 * THIS BUILD FILE WILL NOT WORK. It is referencing paths that probably
 * do not exist on your machine. Just use it as a guide.
 */
({
    //The top level directory that contains your app. If this option is used
    //then it assumed your scripts are in a subdirectory under this path.
    //This option is not required. If it is not specified, then baseUrl
    //below is the anchor point for finding things. If this option is specified,
    //then all the files from the app directory will be copied to the dir:
    //output area, and baseUrl will assume to be a relative path under
    //this directory.
    //appDir: "library-name",

    //By default, all modules are located relative to this path. If baseUrl
    //is not explicitly set, then all modules are loaded relative to
    //the directory that holds the build file. If appDir is set, then
    //baseUrl should be specified as relative to the appDir.
    baseUrl: "./library-name",

    //By default all the configuration for optimization happens from the command
    //line or by properties in the config file, and configuration that was
    //passed to requirejs as part of the app's runtime "main" JS file is *not*
    //considered. However, if you prefer the "main" JS file configuration
    //to be read for the build so that you do not have to duplicate the values
    //in a separate configuration, set this property to the location of that
    //main JS file. The first requirejs({}), require({}), requirejs.config({}),
    //or require.config({}) call found in that file will be used.
    //mainConfigFile: 'require.config.js',

    //If shim config is used in the app during runtime, duplicate the config
    //here. Necessary if shim config is used, so that the shim's dependencies
    //are included in the build. Using "mainConfigFile" is a better way to
    //pass this information though, so that it is only listed in one place.
    //However, if mainConfigFile is not an option, the shim config can be
    //inlined in the build config.
    shim: {},

    //As of RequireJS 2.0.2, the dir above will be deleted before the
    //build starts again. If you have a big build and are not doing
    //source transforms with onBuildRead/onBuildWrite, then you can
    //set keepBuildDir to true to keep the previous dir. This allows for
    //faster rebuilds, but it could lead to unexpected errors if the
    //built code is transformed in some way.
    keepBuildDir: false,

    //Used to inline i18n resources into the built file. If no locale
    //is specified, i18n resources will not be inlined. Only one locale
    //can be inlined for a build. Root bundles referenced by a build layer
    //will be included in a build layer regardless of locale being set.
    locale: "en-us",

    //How to optimize all the JS files in the build output directory.
    //Right now only the following values
    //are supported:
    //- "uglify": (default) uses UglifyJS to minify the code.
    //- "uglify2": in version 2.1.2+. Uses UglifyJS2.
    //- "closure": uses Google's Closure Compiler in simple optimization
    //mode to minify the code. Only available if running the optimizer using
    //Java.
    //- "closure.keepLines": Same as closure option, but keeps line returns
    //in the minified files.
    //- "none": no minification will be done.
    optimize: "uglify",

    //Introduced in 2.1.2: If using "dir" for an output directory, normally the
    //optimize setting is used to optimize the build bundles (the "modules"
    //section of the config) and any other JS file in the directory. However, if
    //the non-build bundle JS files will not be loaded after a build, you can
    //skip the optimization of those files, to speed up builds. Set this value
    //to true if you want to skip optimizing those other non-build bundle JS
    //files.
    skipDirOptimize: false,

    //Introduced in 2.1.2 and considered experimental.
    //If the minifier specified in the "optimize" option supports generating
    //source maps for the minfied code, then generate them. The source maps
    //generated only translate minified JS to non-minified JS, it does not do
    //anything magical for translating minfied JS to transpiled source code.
    //Currently only optimize: "uglify2" is supported when running in node or
    //rhino, and if running in rhino, "closure" with a closure compiler jar
    //build after r1592 (20111114 release).
    //The source files will show up in a browser developer tool that supports
    //source maps as ".js.src" files.
    generateSourceMaps: false,

    //Introduced in 2.1.1: If a full directory optimization ("dir" is used), and
    //optimize is not "none", and skipDirOptimize is false, then normally all JS
    //files in the directory will be minified, and this value is automatically
    //set to "all". For JS files to properly work after a minification, the
    //optimizer will parse for define() calls and insert any dependency arrays
    //that are missing. However, this can be a bit slow if there are many/larger
    //JS files. So this transport normalization is not done (automatically set
    //to "skip") if optimize is set to "none". Cases where you may want to
    //manually set this value:
    //1) Optimizing later: if you plan on minifying the non-build bundle JS files
    //after the optimizer runs (so not as part of running the optimizer), then
    //you should explicitly this value to "all".
    //2) Optimizing, but not dynamically loading later: you want to do a full
    //project optimization, but do not plan on dynamically loading non-build
    //bundle JS files later. In this case, the normalization just slows down
    //builds, so you can explicitly set this value to "skip".
    //Finally, all build bundles (specified in the "modules" or "out" setting)
    //automatically get normalization, so this setting does not apply to those
    //files.
    normalizeDirDefines: "skip",

    //If using UglifyJS for script optimization, these config options can be
    //used to pass configuration values to UglifyJS.
    //See https://github.com/mishoo/UglifyJS for the possible values.
    uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000,

        //How to pass uglifyjs defined symbols for AST symbol replacement,
        //see "defines" options for ast_mangle in the uglifys docs.
        defines: {
            DEBUG: ['name', 'false']
        },

        //Custom value supported by r.js but done differently
        //in uglifyjs directly:
        //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
        no_mangle: true
    },

    //Allow CSS optimizations. Allowed values:
    //- "standard": @import inlining, comment removal and line returns.
    //Removing line returns may have problems in IE, depending on the type
    //of CSS.
    //- "standard.keepLines": like "standard" but keeps line returns.
    //- "none": skip CSS optimizations.
    //- "standard.keepComments": keeps the file comments, but removes line
    //returns.  (r.js 1.0.8+)
    //- "standard.keepComments.keepLines": keeps the file comments and line
    //returns. (r.js 1.0.8+)
    optimizeCss: "standard.keepLines",

    //Inlines the text for any text! dependencies, to avoid the separate
    //async XMLHttpRequest calls to load those dependencies.
    inlineText: true,

    //Allow "use strict"; be included in the RequireJS files.
    //Default is false because there are not many browsers that can properly
    //process and give errors on code for ES5 strict mode,
    //and there is a lot of legacy code that will not work in strict mode.
    useStrict: false,

    //If skipModuleInsertion is false, then files that do not use define()
    //to define modules will get a define() placeholder inserted for them.
    //Also, require.pause/resume calls will be inserted.
    //Set it to true to avoid this. This is useful if you are building code that
    //does not use require() in the built project or in the JS files, but you
    //still want to use the optimization tool from RequireJS to concatenate modules
    //together.
    skipModuleInsertion: false,

    //Specify modules to stub out in the optimized file. The optimizer will
    //use the source version of these modules for dependency tracing and for
    //plugin use, but when writing the text into an optimized bundle, these
    //modules will get the following text instead:
    //If the module is used as a plugin:
    //    define({load: function(id){throw new Error("Dynamic load not allowed: " + id);}});
    //If just a plain module:
    //    define({});
    //This is useful particularly for plugins that inline all their resources
    //and use the default module resolution behavior (do *not* implement the
    //normalize() method). In those cases, an AMD loader just needs to know
    //that the module has a definition. These small stubs can be used instead of
    //including the full source for a plugin.
    stubModules: ['jquery', 'underscore', 'backbone'],

    //If it is not a one file optimization, scan through all .js files in the
    //output directory for any plugin resource dependencies, and if the plugin
    //supports optimizing them as separate files, optimize them. Can be a
    //slower optimization. Only use if there are some plugins that use things
    //like XMLHttpRequest that do not work across domains, but the built code
    //will be placed on another domain.
    optimizeAllPluginResources: false,

    //Finds require() dependencies inside a require() or define call. By default
    //this value is false, because those resources should be considered dynamic/runtime
    //calls. However, for some optimization scenarios, it is desirable to
    //include them in the build.
    //Introduced in 1.0.3. Previous versions incorrectly found the nested calls
    //by default.
    findNestedDependencies: false,

    //If set to true, any files that were combined into a build bundle will be
    //removed from the output folder.
    removeCombined: true,

    //If you only intend to optimize a module (and its dependencies), with
    //a single file as the output, you can specify the module options inline,
    //instead of using the 'modules' section above. 'exclude',
    //'excludeShallow', 'include' and 'insertRequire' are all allowed as siblings
    //to name. The name of the optimized file is specified by 'out'.
    name: "library-name",
    //dir: "dist/",
    // include: ["foo/bar/bee"],
    // insertRequire: ['foo/bar/bop'],
    // out: "dist/library-name.js",

    //Wrap any build bundle in a start and end text specified by wrap.
    //Use this to encapsulate the module code so that define/require are
    //not globals. The end text can expose some globals from your file,
    //making it easy to create stand-alone libraries that do not mandate
    //the end user use requirejs.
    wrap: {
        start: "(function() {",
        end: "}());"
    },

    //By default, comments that have a license in them are preserved in the
    //output. However, for a larger built files there could be a lot of
    //comment files that may be better served by having a smaller comment
    //at the top of the file that points to the list of all the licenses.
    //This option will turn off the auto-preservation, but you will need
    //work out how best to surface the license information.
    preserveLicenseComments: true,

    //Sets the logging level. It is a number. If you want "silent" running,
    //set logLevel to 4. From the logger.js file:
    //TRACE: 0,
    //INFO: 1,
    //WARN: 2,
    //ERROR: 3,
    //SILENT: 4
    //Default is 0.
    logLevel: 0,

    //Introduced in 2.1.3: Some situations do not throw and stop the optimizer
    //when an error occurs. However, you may want to have the optimizer stop
    //on certain kinds of errors and you can configure those situations via
    //this option
    throwWhen: {
        //If there is an error calling the minifier for some JavaScript,
        //instead of just skipping that file throw an error.
        optimize: true
    },

    //Introduced in 2.0.2: if set to true, then the optimizer will add a
    //define(require, exports, module) {}); wrapper around any file that seems
    //to use commonjs/node module syntax (require, exports) without already
    //calling define(). This is useful to reuse modules that came from
    //or are loadable in an AMD loader that can load commonjs style modules
    //in development as well as AMD modules, but need to have a built form
    //that is only AMD. Note that this does *not* enable different module
    //ID-to-file path logic, all the modules still have to be found using the
    //requirejs-style configuration, it does not use node's node_modules nested
    //path lookups.
    cjsTranslate: true,

    //Introduced in 2.0.2: a bit experimental.
    //Each script in the build bundle will be turned into
    //a JavaScript string with a //@ sourceURL comment, and then wrapped in an
    //eval call. This allows some browsers to see each evaled script as a
    //separate script in the script debugger even though they are all combined
    //in the same file. Some important limitations:
    //1) Do not use in IE if conditional comments are turned on, it will cause
    //errors:
    //http://en.wikipedia.org/wiki/Conditional_comment#Conditional_comments_in_JScript
    //2) It is only useful in optimize: 'none' scenarios. The goal is to allow
    //easier built bundle debugging, which goes against minification desires.
    useSourceUrl: false,

    //Defines the loading time for modules. Depending on the complexity of the
    //dependencies and the size of the involved libraries, increasing the wait
    //interval may be required. Default is 7 seconds. Setting the value to 0
    //disables the waiting interval.
    waitSeconds: 7
})