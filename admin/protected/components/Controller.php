<?php

class Controller extends CController {
	public $layout='column2';

    public function getParam($name, $default = '') {
        if (isset($_REQUEST[$name])) return $_REQUEST[$name];
        return $default;
    }

    public function responseJSON($data, $error = '', $code = 0) {
        $data = array(
            'data' => $data,
            'error' => $error,
            'status' => $code
        );

        if ($error) {
            $data['status'] = 1;
        }

        print CJavaScript::jsonEncode($data);
        Yii::app()->end();
    }

}