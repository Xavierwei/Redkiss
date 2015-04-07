<?php

class UserReceiveInfo extends CActiveRecord {

    public static function model($class = __CLASS__) {
        return parent::model($class);
    }

    public function tableName() {
        return '{{users_receive_info}}';
    }

    public function primaryKey(){
        return 'Fid';
    }

    public function rules() {
        return array(
            array('Femail, Fallow_rcv', 'required'),
            array('Fid, Fcreated,Fupdated, Fuid', 'safe'),
            array('Femail', 'email'),
        );
    }

    protected function beforeSave() {
        if ($this->getIsNewRecord()) {
            $this->Fcreated = time();
            $this->Fupdated = time();
        }
        else {
            $this->Fupdated = time();
        }

        return parent::beforeSave();
    }
}