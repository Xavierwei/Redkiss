<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Exception\HttpResponseException;
use Illuminate\Support\Facades\Validator;

class UserReceiveInfo extends Model {

    const ACCEPT_ALLOW = 1;
    const ACCEPt_DENIED = 0;

    public $timestamps = false;


    protected $table = 'users_receive_info';
    protected $primaryKey = 'Fid';

    public static function acceptMeans($accept = false) {
        $means = array(
            self::ACCEPT_ALLOW => 'allow',
            self::ACCEPt_DENIED => 'deny',
        );
        if ($accept === false) {
            return $means;
        }

        if (!isset($means[$accept])) {
            throw new HttpResponseException('Please make sure accpet status is existed');
        }
        return $means[$accept];
    }

    public function validate() {
        $values = $this->getAttributes();
        $rules = array(
            'Femail' => 'required|email'
        );

        $validator = Validator::make($values, $rules);

        $messages = $validator->messages();

        return $messages;
    }
}