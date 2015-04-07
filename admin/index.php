<?php

// include Yii bootstrap file
require_once(dirname(__FILE__).'/framework/yii.php');

$env = 'dev';
if (file_exists(dirname(__FILE__).'/env.php'))  $env = require_once(dirname(__FILE__)).'/env.php';

$config=dirname(__FILE__).'/protected/config/main.'.$env.'.php';

// create a Web application instance and run
Yii::createWebApplication($config)->run();