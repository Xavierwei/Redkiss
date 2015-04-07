<?php

/**
 * Class SiteController
 */
class SiteController extends Controller {

    public function actionError() {
        $exception = Yii::app()->errorHandler->error;

        print_r($exception);
    }

    public function actionIndex() {
        print '<p style="font-size: 13px;color:#000;text-transform: uppercase;text-space: 1px;text-align: center;margin-top:2em;">welcome backend office for redkiss</p>';
    }
}
