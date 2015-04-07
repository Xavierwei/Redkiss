<?php

class UserController extends Controller {
    public function actionEmail() {

        $email = $this->getParam('email');
        $allowRec = $this->getParam('allow_rcv');

        $userReceiveInfo = UserReceiveInfo::model();
        $userReceiveInfo->setAttributes(array(
            'Femail' => $email,
            'Fallow_rcv' => $allowRec
        ));

        if ($userReceiveInfo->validate()) {
            $userReceiveInfo->setIsNewRecord(true);
            $ret = $userReceiveInfo->save();
            $this->responseJSON(array());
        }
        else{
            $this->responseJSON(array(), 'save failed');
        }
    }
}