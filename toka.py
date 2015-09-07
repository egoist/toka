#!/usr/bin/env python
# -*- coding: utf-8 -*-


'toka-python'

__author__ = 'fenjuly'

import sys
import os

args = sys.argv

args_len = len(args)
script_path = sys.path[0]
current_path = os.getcwd()

licenses = {'apache-2.0':'Apache-2.0.txt',
            'bsd-3':'BSD-2.txt',
            'bsd-2':'BSD-3.txt',
            'gpl-2.0':'GPL-2.0.txt',
            'isc':'ISC.txt',
            'mit':'MIT.txt',
            'mpl-2.0':'MPL-2.0.txt',
            'wtf':'WTF.txt'}
langs = {'Actionscript',
  'Ada',
  'Agda',
  'Android',
  'AppEngine',
  'AppceleratorTitanium',
  'ArchLinuxPackages',
  'Autotools',
  'C++',
  'C',
  'CFWheels',
  'CMake',
  'CakePHP',
  'ChefCookbook',
  'Clojure',
  'CodeIgniter',
  'CommonLisp',
  'Composer',
  'Concrete5',
  'Coq',
  'CraftCMS',
  'DM',
  'Dart',
  'Default',
  'Delphi',
  'Drupal',
  'EPiServer',
  'Eagle',
  'Elisp',
  'Elixir',
  'Erlang',
  'ExpressionEngine',
  'ExtJs',
  'Fancy',
  'Finale',
  'ForceDotCom',
  'Fortran',
  'FuelPHP',
  'GWT',
  'Gcov',
  'Go',
  'Gradle',
  'Grails',
  'Haskell',
  'IGORPro',
  'Idris',
  'Java',
  'Jboss',
  'Jekyll',
  'Joomla',
  'Jython',
  'Kohana',
  'LabVIEW',
  'Laravel',
  'Leiningen',
  'LemonStand',
  'Lilypond',
  'Lithium',
  'Lua',
  'Magento',
  'Maven',
  'Mercury',
  'MetaProgrammingSystem',
  'Meteor',
  'Nanoc',
  'Nim',
  'Node',
  'OCaml',
  'OSX',
  'Objective-C',
  'Opa',
  'OpenCart',
  'OracleForms',
  'Packer',
  'Perl',
  'Phalcon',
  'PlayFrameworko',
  'Plone',
  'Prestashop',
  'Processing',
  'Python',
  'Qooxdoo',
  'Qt',
  'R',
  'ROS',
  'Rails',
  'RhodesRhomobile',
  'Ruby',
  'Rust',
  'SCons',
  'Sass',
  'Scala',
  'Scrivener',
  'Sdcc',
  'SeamGen',
  'SketchUp',
  'Stella',
  'SugarCRM',
  'Swift',
  'Symfony',
  'SymphonyCMS',
  'TeX',
  'Textpattern',
  'TurboGears2',
  'Typo3',
  'Umbraco',
  'Unity',
  'VVVV',
  'VisualStudio',
  'Waf',
  'Windows',
  'WordPress',
  'Xojo',
  'Yeoman',
  'Yii',
  'ZendFramework',
  'Zephir'}

def copy_file(input_file_name, file_name = 'LICENSE', type = 'w'):
    input_file = open(input_file_name, 'r')
    output_file = open(current_path + '/' + file_name, type)
    all_lines = input_file.readlines();
    for each_line in all_lines:
        output_file.write(each_line)

def write_file(file_name, content):
    output_file = open(current_path + '/' + file_name, 'w')
    output_file.write(content)

def gitignore_warning():
    print("We don' support that type of language, sorry")
    print('see USAGE:')
    print('$ toka .gitignore <LANGUAGE NAME>')
    print()
    print('what we support:')
    print('[0] actionscript                 [1] ada                          [2] agda')
    print('[3] android                      [4] appceleratortitanium         [5] appengine')
    print('[6] archlinuxpackages            [7] autotools                    [8] c')
    print('[9] c++                          [10] cakephp                     [11] cfwheels')
    print('[12] chefcookbook                [13] clojure                     [14] cmake')
    print('[15] codeigniter                 [16] commonlisp                  [17] composer')
    print('[18] concrete5                   [19] coq                         [20] craftcms')
    print('[21] dart                        [22] default                     [23] delphi')
    print('[24] dm                          [25] drupal                      [26] eagle')
    print('[27] elisp                       [28] elixir                      [29] episerver')
    print('[30] erlang                      [31] expressionengine            [32] extjs')
    print('[33] fancy                       [34] finale                      [35] forcedotcom')
    print('[36] fortran                     [37] fuelphp                     [38] gcov')
    print('[39] go                          [40] gradle                      [41] grails')
    print('[42] gwt                         [43] haskell                     [44] idris')
    print('[45] igorpro                     [46] java                        [47] jboss')
    print('[48] jekyll                      [49] joomla                      [50] jython')
    print('[51] kohana                      [52] labview                     [53] laravel')
    print('[54] leiningen                   [55] lemonstand                  [56] lilypond')
    print('[57] lithium                     [58] lua                         [59] magento')
    print('[60] maven                       [61] mercury                     [62] metaprogrammingsystem')
    print('[63] meteor                      [64] nanoc                       [65] nim')
    print('[66] node                        [67] objective-c                 [68] ocaml')
    print('[69] opa                         [70] opencart                    [71] oracleforms')
    print('[72] osx                         [73] packer                      [74] perl')
    print('[75] phalcon                     [76] playframeworko              [77] plone')
    print('[78] prestashop                  [79] processing                  [80] python')
    print('[81] qooxdoo                     [82] qt                          [83] r')
    print('[84] rails                       [85] rhodesrhomobile             [86] ros')
    print('[87] ruby                        [88] rust                        [89] sass')
    print('[90] scala                       [91] scons                       [92] scrivener')
    print('[93] sdcc                        [94] seamgen                     [95] sketchup')
    print('[96] stella                      [97] sugarcrm                    [98] swift')
    print('[99] symfony                     [100] symphonycms                [101] tex')
    print('[102] textpattern                [103] turbogears2                [104] typo3')
    print('[105] umbraco                    [106] unity                      [107] visualstudio')
    print('[108] vvvv                       [109] waf                        [110] windows')
    print('[111] wordpress                  [112] xojo                       [113] yeoman')
    print('[114] yii                        [115] zendframework              [116] zephir')

def license_warning():
    print("We don' support that type of LICENSE, sorry")
    print('see USAGE:')
    print('$ toka license <LICENSE NAME>')
    print('what we support:')
    print('Apache-2.0,BSD-2,BSD-3,GPL-2.0,ISC,MIT,MPL-2.0,WTF')

def webpack_warning():
    print("We don' support that type of webpack, sorry")
    print('see USAGE:')
    print('$ toka webpack -p <PATH> -f <FILENAME> -e <ENTRY>')

def bowerrc_warning():
    print("We don' support that type of .bowerrc, sorry")
    print('see USAGE:')
    print('$ toka .bowerrc <COMPONENT DIR>')

def webpack_file(input_file_name, **types):
    input_file = open(input_file_name, 'r')
    output_file = open(current_path + '/webpack.config.js', 'w')
    all_lines = input_file.readlines();
    for each_line in all_lines:
        content = each_line
        for key, value in types.items():
            if key == '-p':
                if '{{ path }}' in each_line:
                    content = each_line.replace('{{ path }}', value)
            if key == '-f':
                if '{{ filename }}' in each_line:
                    content = each_line.replace('{{ filename }}', value)
            if key == '-e':
                if '{{ entry }}' in each_line:
                    content = each_line.replace('{{ entry }}', value)
        output_file.write(content)

if args_len == 1 or (args_len == 2 and args[1] == '-v'):
    print('toka ~ 0.2.3')
    print('A handy tool to generate common files in command line')
    print('$ toka -v')
    print('$ toka .gitignore <LAUNGUAGE NAMES>')
    print('$ toka .bowerrc <COMPONENT DIR>')
    print('$ toka license <LICENSE NAME>')

elif ('webpack' in args or 'w' in args) and ('webpack' == args[1] or 'w' == args[1]):
    webpack_orders = ['-p', '-f', '-e']
    if args_len < 4:
        webpack_warning()
    elif args_len == 4:
        args3 = args[2]
        args4 = args[3]
        if args3 in webpack_orders:
            types = {args3:args4}
            webpack_file(script_path + '/lib/webpack/config.js', **types)
        else:
            webpack_warning()
    elif args_len == 6:
        args3 = args[2]
        args4 = args[3]
        args5 = args[4]
        args6 = args[5]
        if (args3 in webpack_orders) and (args5 in webpack_orders) and args3 != args5:
            types = {args3:args4, args5:args6}
            webpack_file(script_path + '/lib/webpack/config.js', **types)
        else:
            webpack_warning()
    elif args_len == 8:
        args3 = args[2]
        args4 = args[3]
        args5 = args[4]
        args6 = args[5]
        args7 = args[6]
        args8 = args[7]
        if (args3 in webpack_orders) and (args5 in webpack_orders) and (args7 in webpack_orders)\
                and args3 != args5 and args3 != args7 and args5 != args7:
            types = {args3:args4, args5:args6, args7:args8}
            webpack_file(script_path + '/lib/webpack/config.js', **types)
        else:
            webpack_warning()
    else:
        webpack_warning()
elif ('.bowerrc' in args or 'b' in args) and ('.bowerrc' == args[1] or 'b' == args[1]):
    if args_len != 3:
        bowerrc_warning()
    else:
        content = '{\n  "directory": "' + args[2] +'"\n}'
        write_file('.bowerrc', content)

elif args_len == 2:
    if args[1] == 'license' or args[1] == 'l':
        license_warning()
    elif args[1] == '.gitignore' or args[1] == 'g' or args[1] == 'git':
        gitignore_warning()

elif args_len == 3:
    if args[1] == 'license' or args[1] == 'l':
        args2 = args[2]
        find = False
        for k, v in licenses.items():
            if len(args2) >= 3 and args2.lower() in k:
                print('Detected as %s license...' % k.upper())
                copy_file(script_path + '/lib/license/' + v)
                find = True
                break
        if not find:
            license_warning()
    elif args[1] == '.gitignore' or args[1] == 'g' or args[1] == 'git':
        args2 = args[2]
        find = False
        if args2 == '-d':
            print('The .gitignore file for your default project is saved!')
            copy_file(script_path + '/lib/gitignore/Default.gitignore', '.gitignore')
            find = True
        else:
            lang_list = args2.split(',')
            for lang in lang_list:
                for i in langs:
                    if lang.lower() == i.lower():
                        print('The .gitignore file for your ' + i.lower() + ' project is saved!')
                        copy_file(script_path + '/lib/gitignore/' + i + '.gitignore', '.gitignore')
                        find = True
        if not find:
            gitignore_warning()

elif args_len == 4:
    if args[1] == '.gitignore' or args[1] == 'g' or args[1] == 'git':
        args2 = args[2]
        args3 = args[3]
        find = False
        if args2 == '-d':
            print('The .gitignore file for your default project is saved!')
            if args3 == '-a':
                copy_file(script_path + '/lib/gitignore/Default.gitignore', '.gitignore', 'a')
            else:
                copy_file(script_path + '/lib/gitignore/Default.gitignore', '.gitignore')
            find = True
        elif args2 == '-a' and args3 == '-d':
            print('The .gitignore file for your default project is saved!')
            copy_file(script_path + '/lib/gitignore/Default.gitignore', '.gitignore', 'a')
            find = True
        else:
            lang_list = args2.split(',')
            for lang in lang_list:
                for i in langs:
                    if lang.lower() == i.lower():
                        print('The .gitignore file for your ' + i.lower() + ' project is saved!')
                        if args3 == '-a':
                            copy_file(script_path + '/lib/gitignore/' + i + '.gitignore', '.gitignore', 'a')
                        else:
                            copy_file(script_path + '/lib/gitignore/' + i + '.gitignore', '.gitignore')
                        find = True
        if not find:
            gitignore_warning()





