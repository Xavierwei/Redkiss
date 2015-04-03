<?php
/**
 * Created by Jackey <jackey@fumer.cn>.
 * User: jackeychen
 * Date: 4/3/15
 * Time: 4:23 PM
 */

namespace App\Http\Controllers;

use App\Models\UserReceiveInfo as UserReceiveInfoModel;
use Illuminate\Http\Request;

class UserController extends Controller {

    public function __construct() {
        //TODO::
    }

    public function email() {
        $uid = 0;
        $updated = time();
        $created = time();

        $request = Request::capture();
        $mUserReceiveInfo = new UserReceiveInfoModel();
        $mUserReceiveInfo->Femail = $request->input('email');
        $mUserReceiveInfo->Fallow_rcv = $request->input('allow_rcv');
        $mUserReceiveInfo->Fcreated = $created;
        $mUserReceiveInfo->Fupdated = $updated;
        $mUserReceiveInfo->Fuid = $uid;

        $messages = $mUserReceiveInfo->validate();

        $ret = array(
            'status' => 0,
            'data' => '',
            'error' => '',
        );

        if ($messages->count()) {
            $ret['status'] = 1;
            $ret['error'] = $messages->first();
        }

        $mUserReceiveInfo->save();

        return response()->json($ret);

    }
}