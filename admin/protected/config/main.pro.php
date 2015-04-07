<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
    'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
    'name'=>'Yii Blog Demo',

    // preloading 'log' component
    'preload'=>array('log'),

    // autoloading model and component classes
    'import'=>array(
        'application.models.*',
        'application.components.*',
    ),

    'defaultController'=>'Site',

    // application components
    'components'=>array(
        'db'=>array(
            'connectionString' => 'mysql:host=localhost;dbname=c8redkiss',
            'emulatePrepare' => true,
            'username' => 'c8redkiss',
            'password' => 'd2ziuPk7TN7hyX',
            'charset' => 'utf8',
            'tablePrefix' => '',
        ),
        'errorHandler'=>array(
            // use 'site/error' action to display errors
            'errorAction'=>'site/error',
        ),
        'urlManager'=>array(
            'urlFormat'=>'path',
            'rules'=>array(
                '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
            ),
        ),
    ),

    'params'=>require(dirname(__FILE__).'/params.php'),
);